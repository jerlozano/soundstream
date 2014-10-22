var SC     = require('node-soundcloud');
var config = require('config');

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

  module.getTrackById = function(id, res) {
    SC.get('/tracks/' + id, function(err, track) {
      if ( err ) {
        throw err;
      } else {
        console.log('track retrieved:', track);
        res.send(track);
      }
    });
  };

  return module;
};