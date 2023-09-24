const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

//serves static files from ./public folder
app.use(express.static("./public"));

//sets the text "Navigate to /paths or /send as the default page content"
//note that this will not be visible because in
app.get('/', (req, res) => res.send('Navigate to /paths or /send'));

//route that will serve the `public/send.html` page
app.get('/send', (req, res) => res.sendFile(path.join(__dirname, 'public/send.html')));

//route that will serve up the `public/paths.html` page
app.get("/paths", (req, res) => res.sendFile(path.join(__dirname, "./public/paths.html")));

//begins listening at specified port
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));