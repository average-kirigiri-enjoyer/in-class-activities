// Dependencies
const express = require('express');
const exphbs = require('express-handlebars'); //imports handlebars for express
const path = require('path');
const hbs = exphbs.create({}); //creates instance of handlebars


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// the rendering engine for express is called 'handlebars', and points to hbs.engine, which is the rendering engine created avoe(?)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
