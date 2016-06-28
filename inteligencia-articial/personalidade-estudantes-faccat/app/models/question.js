'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
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
});

module.exports = mongoose.model('Question', Question);
