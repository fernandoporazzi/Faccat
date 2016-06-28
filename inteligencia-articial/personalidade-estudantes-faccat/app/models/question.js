'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence');

const OptionSchema = new Schema({
    _id: Number,
    value: {
        type: String,
        required: true
    }
}, { _id: false });

OptionSchema.plugin(mongooseSequence);

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: [ OptionSchema ]
});

module.exports = mongoose.model('Question', QuestionSchema);
