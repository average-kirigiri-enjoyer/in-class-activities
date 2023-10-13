const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // to help manage user sessions
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // sets the max age of the cookie, i.e. it will delete itself after the set timespan elapse (in milliseconds)
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // it restricts the cookie to ony HTTP requests & responses, preventing it from being accessed or otherwise
    // manipulated by a webpage's JavaScript
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // allows cookies to be set when accessing an HTTP website; not just HTTPS
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // prevents cookies from being sent when the user is not interacting directly with the site the cookie originated from
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
