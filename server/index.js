var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var route = require('./route');
route(app, express);

var server = require('./server');
server(app);
