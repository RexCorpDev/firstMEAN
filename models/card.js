'use strict';

var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
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
});


module.exports = Card;
