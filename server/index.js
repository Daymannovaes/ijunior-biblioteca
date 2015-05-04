var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var route = require('./route');
route(app, express);

var server = require('./server');
server(app);
