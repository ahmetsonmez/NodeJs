// In this section, request routing is configured manually.
var http = require("http");
var fs = require("fs");

var server  = http.createServer((request,response) =>{

    if(request.url == '/'){
        fs.readFile("pages/index.html",(error,html)=> {
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(html);
            response.end();
        });
    }
    else if(request.url == '/about'){
        fs.readFile("pages/about.html",(error,html)=> {
            response.write(html);
            response.end();
        });
    } else{
        fs.readFile("pages/notfound.html",(error,html)=> {
            response.write(html);
            response.end();
        });
    }
});

server.listen(3000);

console.info("node.js started at 3000 port.");