var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello vencut!');
  res.end();
}).listen(8080);