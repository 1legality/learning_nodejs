var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;
app.listen(port);

var htmlController = require('./controllers/htmlController.js');

htmlController(app);