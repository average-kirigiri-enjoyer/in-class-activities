const path = require('path');

// TODO: Add comment explaining role of route below
// when a user attempts to visit the home page, the index.html file is sent in response
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
