var app = require('./index');
var logger = require('./common/logger');
var Register = require('./common/register');
register = new Register();

var envPort = process.env.PORT || 3000;

var server = app.listen(envPort, function() {
  logger.info('Server started on ' + server.address().address + ':' + server.address().port);

  //Register with the aggregator
  var endpoint = '' + server.address().address + ':' + server.address().port;
  register.register(endpoint);

});

