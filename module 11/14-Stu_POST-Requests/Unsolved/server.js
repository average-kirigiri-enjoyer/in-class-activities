const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
    console.log("REVIEW GET REQUEST RECEIVED!!!");
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post('/api/reviews', (req, res) =>
{
  console.log("REVIEW POST REQUEST RECEIVED!!!");
});
// Your code here

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  console.log("UPVOTE GET REQUEST RECEIVED!!!");
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  // Your code here
  console.log("UPVOTE POST REQUEST RECEIVED!!!");
});
// Your code here

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
