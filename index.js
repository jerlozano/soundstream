var express = require('express');
var http = require('http');

var app = express();


// app.route('/', function(req, res){
//   res.send('hello');
// });

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><head></head><body>HELLO</body></html>');
  response.end();
}).listen(3000);
