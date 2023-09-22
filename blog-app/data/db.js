const mysql = require("mysql2");
const config = require("../config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,{
    dialect : "mysql",
    host:config.db.host
});


async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect();
module.exports = sequelize;

//for Mysql

// let connection = mysql.createConnection(config.db);

// connection.connect((err)=>{
//     if(err){
//         return console.error("The Database is not connected");
//     }

//     console.info("Database connection is successful!");
// });

// module.exports = connection.promise();