var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html' 
    });

    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = "Learning node.js is a joy so far";
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(8080, '127.0.0.1');