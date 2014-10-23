var SC     = require('node-soundcloud');
var config = require('config');
var logger = require('../common/logger');

module.exports = function () {
  module.SoundCloud= SC;

  // instantiate the client
  module.initialize = function() {
    SC.init({
      id: config.clientId,
      secret: config.clientSecret,
      uri: config.redirectUri,
    });
  };

  module.getHomePage = function(request, reply) {
    logger.info('home page served');
    reply.file('public/index.html');
  };

  module.getStyles = function(request, reply) {
    logger.info('styles served');
    reply.file('public/style.css');
  };

  module.getTrackById = function(id, reply) {
    SC.get('/tracks/' + id, function(err, track) {
      if ( err ) {
        logger.error(err);
        throw err;
      } else {
        logger.info('track retrieved:', track);
        reply(track);
      }
    });
  };

  module.getTrackByKeyword = function(keyword, reply) {
    SC.get('/tracks?q=' + keyword, function(err, track) {
      if ( err ) {
        logger.error(err);
        throw err;
      } else {
        logger.info('track retrieved:', track);
        reply(track);
      }
    });
  };

  return module;
};
