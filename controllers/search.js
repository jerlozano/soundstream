var SC = require('node-soundcloud');

var client_id     = 'a9a7c65a8528a3ff54c457f2de44d73b';
var client_secret = '69f31ce94d422e74f9d2fcfb7ee29114';
var redirect_uri  = null;


module.exports = function () {
  module.SoundCloud= SC;

  // instantiate the client
  module.initialize = function() {
    SC.init({
      id: client_id,
      secret: client_secret,
      uri: redirect_uri
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