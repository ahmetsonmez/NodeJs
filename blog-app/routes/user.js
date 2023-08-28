const routers = require("express").Router();

const data = {
    "categories": ["Web Development","Mobile Development","Data Analysis"]
}

routers.use("/blogs/:blogId",function(req,res){
    res.render("users/details");   
});

routers.use("/blogs",function(req,res){
    res.render("users/list");   
});

routers.use("/",function(req,res){
    res.render("users/index",data);    
});

module.exports = routers;