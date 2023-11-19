// Create a web server
// Start the server on port 3000
// Listen for requests
// Log the requests
// Parse the requests
// Log the parsed requests
// Respond to the requests
// Log the responses
// Send the responses

var http = require('http');
var url = require('url');
var qs = require('querystring');

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  var query = qs.parse(url.parse(request.url).query);
  console.log(path, query);
  response.end();
});

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});


