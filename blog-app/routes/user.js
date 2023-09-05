const routers = require("express").Router();
const db = require("../data/db");

routers.use("/blogs/:blogId", async function(req,res){
    try {
        const id = req.params.blogId;
        const [blog, ] = await db.execute("select * from Blogs where IsValid =1 and Id=?",[id]);
        
        if(blog[0]){
          return  res.render("users/details", {
                blog : blog[0]
            });  
        }

        return res.redirect("/");

        
    } catch (error) {
        console.error(error);
    }
});

routers.use("/blogs",function(req,res){
    res.render("users/list");   
});

routers.use("/", async function(req,res){

    try {

        const [blogs, ] = await db.execute("select * from Blogs where IsValid =1");
        const [categories,] = await db.execute("select * from Categories");
        
        res.render("users/index",{
            result : blogs,
            categories : categories
        }); 

    } catch (error) {
        console.error(error);
    }


    // If requested, it can also be used with a promise structure like this.
    // However, the nested lines here make the code difficult to read. 
    // Therefore, a better approach would be to use the async/await structure as above.

    // db.execute("select * from Blogs where IsValid =1")
    // .then(courseResult => {

    //         db.execute("select * from Categories")
    //         .then(categoryResult =>{
    //             res.render("users/index",{
    //                 result : courseResult[0],
    //                 categories : categoryResult[0]
    //             });  
    //         })
    //         .catch(err=> console.log(err))         
    //     })
    //     .catch(err => console.error(err));   
});

module.exports = routers;