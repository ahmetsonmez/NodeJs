const express = require("express");
const app = express();
const path = require("path");
const userRouters = require("./routes/user");
const adminRouters = require("./routes/admin");

app.set("view engine","ejs");

console.log(app.get("view engine"));

//get static files.
app.use(express.static(path.join(__dirname,"node_modules")));

// use alternate option alias name
app.use("/source",express.static(path.join(__dirname,"public")));

app.use("/admin",adminRouters);
app.use(userRouters);

app.listen(3000,function(){

    console.log("listening 3000 port");
});