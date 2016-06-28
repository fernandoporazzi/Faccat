'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSequence = require('mongoose-sequence');

const QuestionSchema = new Schema({
    _id: {
        type: Number
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: [
        {
            type: String,
            required: true
        }
    ]
}, { _id: false });

QuestionSchema.plugin(mongooseSequence);

module.exports = mongoose.model('Question', QuestionSchema);
