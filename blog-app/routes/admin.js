const routers = require("express").Router();
const path = require("path");

routers.use("/blogs/create",function(req,res){
    res.sendFile(path.join(__dirname,"../views/admin","create.html"));  
});

routers.use("/blogs/:blogId",function(req,res){
    res.sendFile(path.join(__dirname,"../views/admin","edit.html"));    
});

routers.use("/blogs",function(req,res){
    res.sendFile(path.join(__dirname,"../views/admin","list.html"));    
});

routers.use("/",function(req,res){
    res.sendFile(path.join(__dirname,"../views/admin","list.html"));    
});

module.exports = routers;