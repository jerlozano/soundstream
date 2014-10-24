var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

var urlRoot = 'http://localhost:3000/';

// var USERNAME = 'username';

var browseFrontend = {
  visitLandingPage: function(browser) {
    return browser.get(urlRoot)

  }
};

describe('visit landing page', function() {

  it('should display the search bar', function() {
    return browseFrontend.visitLandingPage(this.browser)
      .title().should.become('Search Wiz');
  });

});