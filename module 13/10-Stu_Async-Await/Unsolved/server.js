const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const seedData = require("./seeds/bookSeeds.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server

sequelize.sync({ force: false })
/*.then(() =>
{
  Book.bulkCreate(seedData); // Insert seed data into the database
})*/
.then(() =>
{
  app.listen(PORT, () => console.log('Now listening'));
});