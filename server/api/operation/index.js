'use strict';

var express = require('express');
var controller = require('./operation.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.getRoleInfo);

module.exports = router;