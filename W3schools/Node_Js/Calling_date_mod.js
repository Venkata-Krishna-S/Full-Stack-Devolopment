var http = require("http");
var dt = require("./my_modules/my_datetime");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("my current date and time is" + dt.my_datetime());
    res.end("we are calling my date module into a js file");
  })
  .listen(8080);
