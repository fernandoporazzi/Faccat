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
                type: Number,
                required: true
            }
        }
    ],
    output: {
        type: ObjectId,
        ref: 'Course',
        required: true
    }
});

module.exports = mongoose.model('Answer', Answer);
