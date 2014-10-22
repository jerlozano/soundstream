var express = require('express');
var http = require('http');
var app = express();
var Search = require('./controllers/search');

var search = new Search();

app.get('/search', function (req, res) {

  console.log(req.route);
  var filterParam = req.param('filter');
  res.send('filtering by: ' + filterParam);

});

  app.get('/search/track', function (req, res) {

  var id = req.param('id');
  search.initialize();
  search.getTrack(id, res);

});

module.exports = app;