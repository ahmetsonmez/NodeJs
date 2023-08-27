const routers = require("express").Router();
const path = require("path");

routers.use("/blogs/:blogId",function(req,res){
    res.sendFile(path.join(__dirname,"../views/users","details.html"));  
});

routers.use("/blogs",function(req,res){
    res.sendFile(path.join(__dirname,"../views/users","list.html"));    
});

routers.use("/",function(req,res){
    res.sendFile(path.join(__dirname,"../views/users","index.html"));    
});

module.exports = routers;