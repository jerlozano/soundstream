var express = require('express');
var logger  = require('./common/logger');
var path    = require('path');
var Search  = require('./controllers/search');
var request = require('request');
var config  = require('config');

var app = express();

var search = new Search();
search.initialize();

app.get('/test', function (req, res) {
  res.send('app is running');
});

app.post('/search/track', function (req, res) {

  var id = req.param('id');
  logger.info('searching for a track by id: ' + id);
  search.getTrackById(id, res);

});

app.post('/search', function (req, res) {

  var keyword = req.param('q');
  logger.info('searching for a track by keyword: ' + keyword);
  search.getTrackByKeyword(keyword, res);

});

<<<<<<< HEAD
app.post('/custom', function (req, res) {

  var keyword = req.param('q');
  var apiUrl = config.customApiUrl;
  logger.info('searching within ' + apiUrl +  ' for by keyword: ' + keyword);
  request(apiUrl + keyword, function(err, resp, body) {
    if (err) {
      throw err;
    }
    logger.info(resp);
    res.send(resp);
  });

})

app.get('/', function(req,res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/style', function(req,res) {
  res.sendFile(path.resolve('public/style.css'));
});

module.exports = app;
