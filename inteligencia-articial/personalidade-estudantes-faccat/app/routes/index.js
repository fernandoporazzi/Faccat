'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router
    .route('/')
    .get(controller.render_index)
    .post(controller.create)

router
    .route('/find')
    .post(controller.find)

module.exports = router;
