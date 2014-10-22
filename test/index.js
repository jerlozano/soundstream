var assert  = require('assert');
var request =  require('request');

describe('An HTTP Server', function () {

  it('should make a request', function(done) {

    request('http://localhost:3000/', function(err, resp, body) {
      if (err) {
        throw err;
      }

      // console.log(resp.)

      assert.equal(resp.statusCode, 200);
      done();
    });

  });

});
