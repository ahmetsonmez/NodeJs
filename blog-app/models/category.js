const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");

const Category = sequelize.define("category",{
    Id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    Name : {
        type : DataTypes.STRING,
        allowNull : false
    }
});

async function sync(){
    await Category.sync({force : true});
    console.info("Category table synchronized.");
}

sync();

module.exports = Category;