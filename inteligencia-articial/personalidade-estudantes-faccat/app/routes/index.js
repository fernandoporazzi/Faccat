'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router
    .route('/')
    .get(controller.render_index)

router
    .route('/student')
    .get(controller.render_student)
    .post(controller.create)

router
    .route('/find')
    .get(controller.render_find)
    .post(controller.find)

module.exports = router;
