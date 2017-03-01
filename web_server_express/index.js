var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false})

// Use env variable if exists, else use port 3000
var port = process.env.PORT | 3000;
app.listen(port);


// Middleware, everytime we see /assets, convert is to /public and then loads it.
app.use('/assets', express.static(__dirname + '/public'));

// Middleware for every get functions
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet>' + 
    '</head><body><h1>Hello you!</h1>' +
    '<form action="/person" method="post">' +
    'First name : <input type="text" name="firstname"></br>' + 
    'Last name : </input><input type=text" name ="lastname"</input></br>' +
    '<input type="submit" name="submit" value="Submit" />' +
    '</form></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person : ' + req.params.id + '</h1><p>Query String : ' + req.query.qstr + '</body></html>');
});

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})