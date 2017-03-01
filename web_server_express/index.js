var express = require('express');
var app = express();

// Use env variable if exists, else use port 3000
var port = process.env.PORT | 3000;

// Middleware, everytime we see /assets, convert is to /public and then loads it.
app.use('/assets', express.static(__dirname + '/public'));

// Middleware for every get functions
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello you!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person : ' + req.params.id + '</id></body></hmlt>');
});

app.listen(port);