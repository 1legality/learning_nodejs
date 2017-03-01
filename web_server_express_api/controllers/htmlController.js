var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {
    app.get('/person/:id', function(req, res) {
        // Get that data from the database
        res.send('person : ' + req.params.id);
    });

    app.get('/person', function(req, res) {
        // Get that data from the database
        res.send('List of persons');
    });

    app.post('/person', urlencodedParser, function(req, res) {
        // save to the database
        res.send('Added new user');
    })

    app.delete('/person', function(req, res) {
        // delete from the database
        res.send('Deleted a user');
    })
}