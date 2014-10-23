// var app = require('./index');
// var logger = require('./common/logger');

// var envPort = process.env.PORT || 3000;

// app.listen(envPort, function() {
//   logger.info('Server started on 0.0.0.0:' + envPort);
// });
var Search  = require('./controllers/search');
var search = new Search();
search.initialize();



var Hapi = require('hapi');
var server = new Hapi.Server(process.env.PORT || 3000);


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      search.getHomePage(request, reply);
      console.log('request for /');
    }
});

server.route({
    method: 'GET',
    path: '/style',
    handler: function (request, reply) {
      search.getStyles(request, reply);
      console.log('request for /');
    }
});

server.route({
    method: 'GET',
    path: '/search/track/id/{id?}',
    handler: function (request, reply) {
      var id = request.params.id;
      search.getTrackById(id, reply);
      console.log('searching for id: ' + encodeURIComponent(id));
    }
});

server.route({
    method: 'GET',
    path: '/search/keyword/{keyword?}',
    handler: function (request, reply) {
      var keyword = request.params.keyword;
      search.getTrackByKeyword(keyword, reply);
      console.log('searching for keyword: ' + encodeURIComponent(keyword));
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});


