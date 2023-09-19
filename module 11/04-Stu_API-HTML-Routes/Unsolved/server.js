// TODO: Import express
const express = require("express");

// TODO: Import 'terms.json' file
const PORT = 3001;
const terms = require("./terms.json");

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/', (req, res) =>
{
  res.send(terms);
});

app.get("/api/", (req, res) =>
{
  res.json
  ({
    term: "terms",
    description: "description of web development terms"
  });
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
