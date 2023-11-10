const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());


//POST route to add a document (object?) to a collection
app.post('/create', (req, res) => {
  //new document will be added to the 'bookCollection' collection
  db.collection('bookCollection').insertOne(
    //new document will have a 'title' and 'author' property, with values extracted from the request body
    { title: req.body.title, author: req.body.author }
  )
    //returns resulting object as a JSON response
    .then(results => res.json(results))
    //throws an error, if any occur
    .catch(err => {
      if (err) throw err;
    });
});

//POST route to add multiple documents to a collection
app.post('/create-many', (req, res) => {
  //documents will be added to the 'bookCollection' collection
  db.collection('bookCollection').insertMany(
    //the two documents that will be added will each have a 'title' property, defined as per the following;
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    //results the resulting objects as a JSON response
    .then(results => res.json(results))
    //throws an error, if any occur
    .catch(err => {
      if (err) throw err;
    });
});

//GET route to retrieve all the documents in a collection
app.get('/read', (req, res) => {
  //retrieves all the documents from the 'bookCollection' collection
  db.collection('bookCollection')
    .find({}) //retrieves all documents
    .toArray() //stores all document data in an array
    .then(results => res.json(results)) //returns the resulting array of documents as a JSON response
    //throw an error, if any occur
    .catch(err => {
      if (err) throw err;
    });
});
