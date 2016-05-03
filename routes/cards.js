'use strict';

var express = require('express');
var router = express.Router();
var Card = require('../models/card');



router.get('/', (req, res) => {
  Card.find({}, (err, trees)=> {
    if(err){
      res.status(400).send(err);
    }
    else {
      res.send(trees);
    };
  });
});

router.get('/:category', (req, res) => {
  console.log(req.params.category);
  Card.find(req.params.category, (err, tree) =>{
    if(err){
      res.status(400).send(err);
    } else {
      res.send(tree);
    }
  });
});

router.get('/:id', (req, res) => {
  Card.findById(req.params.id, (err, tree) =>{
    if(err){
      res.status(400).send(err);
    } else {
      res.send(tree);
    }
  });
});

router.delete('/:id', (req, res) => {
  console.log("deleting");
  Card.findByIdAndRemove(req.params.id, err => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send("Deleted!");
    }
  });
});

router.post('/', (req, res) => {
  var card = new Card(req.body);

  Card.save((err, savedCard) => {
    if(err){
      res.status(404).send(err);
    } else {
      console.log("Saved the Card!");
      res.send(savedCard);
    }
  })

});

router.put('/:id', (req, res) => {
  console.log('do you see this?');
  Card.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, (err, card) => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send(card);
    }
  });
});

module.exports = router;
