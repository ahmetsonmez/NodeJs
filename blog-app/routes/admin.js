const routers = require("express").Router();

const data ={
    "title":"Popular"
}

routers.use("/blogs/create",function(req,res){
    res.render("admin/create");  
});

routers.use("/blogs/:blogId",function(req,res){
    res.render("admin/edit"); 
});

routers.use("/blogs",function(req,res){
    res.render("admin/list",data);    
});

routers.use("/",function(req,res){
    res.render("admin/list",data);    
});

module.exports = routers;