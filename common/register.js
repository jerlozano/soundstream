var request    = require('request');
var config     = require('config');
var logger     = require('./logger');

module.exports = function() {

  module.register = function (baseEndpoint) {

    var registrationDataBody = {
      teamId: config.registrationTeamId,
      endPoint: baseEndpoint + config.registrationSearchPath,
      method: config.registrationHttpMethod,
      contentType: config.registrationContentType,
      requiredParams: config.registrationRequiredParams
    }

    logger.info(registrationDataBody);

    request.post({
      url: config.registrationEndpoint,
      json: true,
      body: registrationDataBody
    }, function(req, res) {
      logger.info('Registration response status code: ' + res.statusCode);
    });

  };

  return module;

};
