'use strict';

var mongoose = require('mongoose');

let cardSchema = new mongoose.Schema({
  difficulty  :   String,
  category    :   String,
  question    :   String,
  answer      :   String,
  choice1     :   String,
  choice2     :   String,
  choice3     :   String,
  choice4     :   String,
  totalstudy  :   Number,
  invalidCount :  Number
})


let Card = mongoose.model('Card', cardSchema);

module.exports = Card;
