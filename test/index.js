var assert  = require('assert');
var request =  require('request');

describe('An HTTP Server', function () {
  var app;

  before(function() {
    app = require('../index.js');
  });

  after(function() {
    app.server.close();
  })

  it('should make a request', function(done) {

    request('http://localhost:3000/search?filter=artist', function(err, resp, body) {
      if (err) {
        throw err;
      }

      // console.log(resp.)

      assert.equal(resp.statusCode, 200);
      console.log(resp);
      done();
    });

  });

});
