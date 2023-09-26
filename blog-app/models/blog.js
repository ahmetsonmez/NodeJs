const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Blog = sequelize.define("blog",{
    Id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    Title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Description : {
        type : DataTypes.TEXT,
        allowNull : true
    },
    Image : {
        type : DataTypes.STRING,
        allowNull : false
    },
    MainPage : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    },
    IsValid : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue: false
    },
    CategoryId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue: false
    }
});

async function sync(){
    await Blog.sync({force : true});
    console.info("Blog table synchronized.");
}

sync();

module.exports = Blog;