var winston = require('winston');
var config  = require('config');

var winston = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ level: config.consoleLoggingLevel })
    ]
});

module.exports = winston;