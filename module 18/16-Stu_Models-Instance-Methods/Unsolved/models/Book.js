const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`

const bookSchema = new mongoose.Schema(
{
    title: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: String, required: true},
});

// TODO: Create a custom instance method named `getDiscount`

bookSchema.methods.getDiscount = function ()
{
    this.price = this.price / 2;
    console.log(`The book ${this.title} is 50% off, available for $${this.price}`);
};

// TODO: Create a model named `Book`

const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model

const discountedBook = new Book(
{
    title: "Oh the Places You'll Go!",
    author: "Dr. Suess",
    price: 100,
});

// TODO: Call the custom instance method on the instance

discountedBook.getDiscount();

module.exports = Book;
