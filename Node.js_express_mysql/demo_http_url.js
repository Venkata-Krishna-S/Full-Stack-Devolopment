var http = require("http");
const { url } = require("inspector");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
