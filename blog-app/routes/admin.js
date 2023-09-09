const routers = require("express").Router();

const db = require("../data/db");

const data ={
    "title":"Admin Blog List"
}

routers.get("/blogs/create", async function(req,res){
    try {
        const [categories,] = await db.execute("select Id,Name from Categories");
        res.render("admin/blog-create",{
            categories : categories
        });  
    } catch (error) {
        console.error(error);
    }
    
});

routers.post("/blogs/create",async function(req,res){

    const title = req.body.title;
    const content = req.body.content;
    const picture = req.body.picture;
    const mainpage = req.body.mainpage == "on" ? 1 : 0;
    const valid = req.body.valid == "on" ? 1 : 0;
    const categoryId = req.body.categoryId;

    try {

        await db.execute("Insert into Blogs(Title,Description,Image,MainPage,IsValid,CategoryId) Values(?,?,?,?,?,?)"
        ,[title,content,picture,mainpage,valid,categoryId]);

        res.redirect("/");
        
    } catch (error) {
        console.error(error);
    }

});

routers.get("/blogs/category/create",function(req,res){
    res.render("admin/category-create");  
});

routers.get("/blogs/:blogId",function(req,res){
    res.render("admin/edit"); 
});

routers.use("/blogs",function(req,res){
    res.render("admin/list",data);    
});

routers.use("/",function(req,res){
    res.render("admin/list",data);    
});

module.exports = routers;