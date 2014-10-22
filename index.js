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

app.get('/search/track/id/:id', function (req, res) {

  var id = req.params.id;
  console.log('searching for a track by id: ' + id);
  search.initialize();
  search.getTrackById(id, res);

});

app.get('/search/track/keyword/:keyword', function (req, res) {

  var keyword = req.params.keyword;
  console.log('searching for a track by keyword: ' + keyword);
  search.initialize();
  search.getTrackByKeyword(keyword, res);

});

module.exports = app;