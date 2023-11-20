const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema(
  {
      title: {type: String, required: true},
      price: {type: String, required: true},
  });

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const bookData = [
  {title: "Oh the Places You'll Go!", price: 1000000},
  {title: "Kama Sutra", price: 1},
]

Library.create({name: "NEWLIBRARY", books: bookData})
.then(data => console.log(data))
.catch(err => console.log(err));

module.exports = Library;
