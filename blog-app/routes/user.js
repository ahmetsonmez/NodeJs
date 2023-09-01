const routers = require("express").Router();
const db = require("../data/db");

const data = {
    "categories": ["Web Development","Mobile Development","Data Analysis"],
    "courses" : [
        {
            "Name" : "C#",
            "Rating" : "4,5",
            "Price" : "5$",
            "Valid" : true
        },
        {
            "Name" : "Python",
            "Rating" : "5",
            "Price" : "15$",
            "Valid" : true
        },
        {
            "Name" : "Javascript",
            "Rating" : "4",
            "Price" : "3$",
            "Valid" : false
        }
    ]
}

routers.use("/blogs/:blogId",function(req,res){
    res.render("users/details");   
});

routers.use("/blogs",function(req,res){
    res.render("users/list");   
});

routers.use("/",function(req,res){
    db.execute("select * from Blogs where IsValid =1")
    .then(results => {
            res.render("users/index",{
                result : results[0]
            });    
        })
        .catch(err => console.error(err));   
});

module.exports = routers;