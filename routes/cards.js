'use strict';

var express = require('express');
var router = express.Router();
var Card = require('../models/card');


router.route('/')
.get((req, res) => Card.find({}, res.handle))
.post((req, res) => Card.create(req.body, res.handle));

router.route('/:id')
.get((req, res) => Card.findById(req.params.id, res.handle))
.delete((req, res) => Card.findByIdAndRemove(req.params.id, res.handle))
.put((req, res) =>  Card.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, res.hanlde));

router.get('/:category', (req, res) => Card.find(req.params.category, res.handle));

module.exports = router;
