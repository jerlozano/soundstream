var express = require('express');
var http = require('http');
var app = express();
var Search = require('./controllers/search');
var logger = require('./common/logger');

var search = new Search();

app.get('/', function (req, res) {

  res.send('app is running');

});

app.get('/search/track/id/:id', function (req, res) {

  var id = req.params.id;
  logger.info('searching for a track by id: ' + id);
  search.initialize();
  search.getTrackById(id, res);

});

app.get('/search/keyword/:keyword', function (req, res) {

  var keyword = req.params.keyword;
  logger.info('searching for a track by keyword: ' + keyword);
  search.initialize();
  search.getTrackByKeyword(keyword, res);

});

app.get('/home', function(req,res) {
  res.sendfile('public/index.html');
});

app.get('/style', function(req,res) {
  res.sendfile('public/style.css');
});

module.exports = app;
