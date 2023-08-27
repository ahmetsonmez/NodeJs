var fs = require("fs");

// In this section, request routing is configured manually.
var routeHandler = (request,response) =>{

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
    } 
    else if(request.url == '/register'){
        fs.readFile("pages/register.html",(error,html)=> {
            response.write(html);
            response.end();
        });
    }
    else if(request.url == '/send-register' && request.method == 'POST'){

        const data =[];

        request.on("data",(chunk)=>{
            data.push(chunk);
        });

        request.on("end",()=>{
            const result = Buffer.concat(data).toString();
            const parsedData = result.split("=")[1];

            fs.appendFile("logs/log.txt",parsedData, (error)=>{

                if(error){
                    console.error("An error occurred during processing.")
                }
                else{
                    response.statusCode = 302;
                    response.setHeader("Location","/");
                    response.end();
                    console.info("The process is successful.")
                }
            });

        });
    }
    else{
        fs.readFile("pages/notfound.html",(error,html)=> {
            response.write(html);
            response.end();
        });
    }
};

module.exports = routeHandler;