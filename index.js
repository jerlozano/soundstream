var express = require('express');
var app = express();

app.route('/', function(req, res){
  res.send('hello');
});

app.listen(3000);