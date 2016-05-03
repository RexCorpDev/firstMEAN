'use strict';

var express = require('express');
var router = express.Router();

router.use('/cards', require('./cards'));

// router.use('/items', require('./items'));

module.exports = router;
