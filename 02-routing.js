var http = require("http");
var routes = require("./modules/routes");

var server  = http.createServer(routes);

server.listen(3000);

console.info("node.js started at 3000 port.");