'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Answer = new Schema({
    input: [
        {
            question: {
                type: ObjectId,
                ref: 'Question',
                required: true
            },
            option: {
                type: ObjectId,
                ref: 'Option',
                required: true
            }
        }
    ],
    output: {
        type: String,
        required: true
    }
});

Answer.pre('save', function (next) {
  this.input.question = slug(this.input.question);
  this.input.option = slug(this.input.option);
  this.output = slug(this.output);
  next();
});

module.exports = mongoose.model('Answer', Answer);
