const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect((err)=>{
    if(err){
        return console.error("The Database is not connected");
    }

    console.info("Database connection is successful!");
});

module.exports = connection.promise();