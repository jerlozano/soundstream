var winston = require('winston');
var config  = require('config');

var winston = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ level: config.consoleLoggingLevel }),
        new (winston.transports.File)({ filename: './app-logging.log', level: config.fileLoggingLevel })
    ]
});

module.exports = winston;