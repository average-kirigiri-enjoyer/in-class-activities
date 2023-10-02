const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
  {
    database: process.env.databaseName,
    username: process.env.SQLusername,
    password: process.env.password,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
