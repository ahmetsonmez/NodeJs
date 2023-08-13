var http = require("http");

function requestListener(request,reponse){
    reponse.end();
}

var server  = http.createServer(requestListener);

server.listen(3000);