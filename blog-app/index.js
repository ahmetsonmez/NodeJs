const express = require("express");

const app = express();

app.use(function(req,res){

    res.end("Hello World!");
});

app.listen(3000,function(){

    console.log("listening 3000 port");
});