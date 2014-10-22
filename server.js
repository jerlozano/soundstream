var app = require('./index');
var logger = require('./common/logger');

app.listen(process.env.PORT || 3000, function() {
  logger.info('Server started on 0.0.0.0:3000');
});