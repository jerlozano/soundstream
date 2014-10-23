var app = require('./index');
var logger = require('./common/logger');

var envPort = process.env.PORT || 3000;

app.listen(envPort, function() {
  logger.info('Server started on 0.0.0.0:' + envPort);
});