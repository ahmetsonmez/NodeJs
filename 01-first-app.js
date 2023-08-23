var http = require("http");

var server  = http.createServer((request,response) =>{

    // This is how we can get Request and Response information.
    // console.log(request.url, request.method);
    // console.log(response.statusCode);

    // This is how we can set custom headers.
    response.setHeader("ContentType","text/html");
    response.write("<h1>Hello World!</h1>");
    response.write("<h2>Welcome</h2>")

    response.end();
});

server.listen(3000);