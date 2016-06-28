'use strict';

// modules
const async = require('async');
const brain = require('brain');
const slug = require('slug');

// models
const AnswerModel = require('../models/answer');
const QuestionModel = require('../models/question');
const CourseModel = require('../models/course');

const _train = body => {
    return new Promise((resolve, reject) => {
        const net = new brain.NeuralNetwork();
        AnswerModel
            .find({})
            .populate('output')
            .then(answers => {
                try {
                    let inputs = [];
                    answers.forEach(answer => {
                        let data = { input : {}, output: {} };
                        answer.input.forEach(input => data['input'][input.question] = input.option );
                        data['output'][answer.output.name] = 1;
                        inputs.push(data);
                    });
                    net.train(inputs);
                    let data = {};
                    for (let question in body) data[question] = body[question];
                    resolve(net.run(data));
                } catch (err) {
                    reject(err);
                }
            })
            .catch(reject);
    });
};

const _getQuestions = () => {
    return new Promise((resolve, reject) => {
        async.parallel({
            courses : cb => CourseModel.find({}).sort('name').exec(cb),
            questions : cb => QuestionModel.find({}, cb)
        }, (err, result) => {
            if (err) return reject(err);
            resolve({
                courses: result.courses,
                questions: result.questions
            });
        });
    });
};

// public
module.exports = {

    render_index : (req, res) => {
        res.render('index');
    },

    render_student : (req, res, next) => {
        _getQuestions()
            .then(data => {
                data.isStudent = true;
                res.render('question', data);
            })
            .catch(next);
    },

    render_find : (req, res, next) => {
        _getQuestions()
            .then(data => {
                data.isStudent = false;
                res.render('question', data);
            })
            .catch(next);
    },

    create : (req, res) => {
        let answer = new AnswerModel();
        answer.output = req.body.other_course || req.body.course;
        delete req.body.course;
        delete req.body.other_course;

        answer.input = [];
        for (let question in req.body) {
            answer.input.push({
                question: question,
                option: req.body[question]
            });
        }

        answer.save(err => {
            if (err) return res.status(500).json(err);
            _train(req.body)
                .then(result => res.status(200).json(result))
                .catch(err => res.status(500).json(err))
        })
    },

    find : (req, res) => {
        _train(req.body)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(500).json(err))
    }

};
