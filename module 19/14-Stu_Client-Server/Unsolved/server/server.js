const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
// sets the ../client/dist/ folder to serve static files
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
