'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');

 //const MONGOURL = 'mongodb://localhost/01mar16_expressMongo';
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/01mar16_expressMongo';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));


mongoose.connect(MONGOURL, err => {
  console.log(err || `Connected to MongoDB @ ${MONGOURL}`);
});

app.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});
