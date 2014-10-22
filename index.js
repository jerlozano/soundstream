var express = require('express');
var http = require('http');

var app = express();


app.set('port', 3000);


app.get('/search', function (req, res) {
  console.log(req.route);
  var filterParam = req.param('filter');
  res.send('filtering by: ' + filterParam);
})


var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

exports.app = app;
exports.server = server;