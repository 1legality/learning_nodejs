var express = require('express');
var app = express();

// Use env variable if exists, else use port 3000
var port = process.env.PORT | 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello you!</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person : ' + req.params.id + '</id></body></hmlt>');
});

app.listen(port);