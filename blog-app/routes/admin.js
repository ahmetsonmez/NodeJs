const routers = require("express").Router();

const db = require("../data/db");

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

routers.get("/blogs/:blogId", async function(req,res){
    try {
        const blogId = req.params.blogId
        const [blog,] = await db.execute("select * from Blogs where Id=?",[blogId]);
        const [categories,] = await db.execute("select * from Categories");

        if(blog[0]){
            res.render("admin/edit",{
                title : blog[0].Title + " Edit",
                blog : blog[0],
                categories : categories
            }); 
        }

        res.redirect("/admin/blogs")       
    } catch (error) {
        console.error(error);
    }  
});

routers.post("/blogs/:blogId", async function(req,res){
    try {
        const blogId = req.params.blogId;
        const title = req.body.title;
        const content = req.body.content;
        const picture = req.body.picture;
        const mainpage = req.body.mainpage == "on" ? 1 : 0;
        const valid = req.body.valid == "on" ? 1 : 0;
        const categoryId = req.body.categoryId;

        await db.execute("UPDATE Blogs SET Title=?,Description=?,Image=?,MainPage=?,IsValid=?,CategoryId=? WHERE Id=?",
        [title,content,picture,mainpage,valid,categoryId,blogId]);

        res.redirect("/admin/blogs");

    } catch (error) {
        console.error(error);
    }
});

routers.get("/blogs",async function(req,res){
    try {
        const [blogs,] = await db.execute("select  Id,Title,Image,Description from Blogs");
        res.render("admin/list",{
            title : "Blog List",
            blogs : blogs
        });  
        
    } catch (error) {
        console.error(error);
    }     
});

routers.delete("/blogs/delete/:blogId",async function(req,res){

});

routers.use("/",function(req,res){
    res.render("admin/list",{
        title : title
    });    
});

module.exports = routers;