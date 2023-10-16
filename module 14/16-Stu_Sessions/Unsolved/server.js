const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');


const PORT = process.env.PORT || 3001;

const app = express(); //initializes express application

const sess =
{
  secret: 'complex secret string goes here', //string used for signing the session ID cookie (THIS SHOULD BE A .ENV VARIABLE)
  resave: false, //sets session data to only be updated when it is modified, instead of on every request
  saveUninitialized: true, //sets uninitialized session data to be saved, e.g. when a user first visits a site, a session data will be stored, albeit empty
};

app.use(session(sess)); //sets express application to utilize the above session

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
