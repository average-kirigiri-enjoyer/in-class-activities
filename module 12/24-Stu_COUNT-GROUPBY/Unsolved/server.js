//import express and mysql
const express = require('express');
const mysql = require('mysql2');

//define port and express application instance
const PORT = process.env.PORT || 3001;
const app = express();

//initialize application middleware to process url-encoded data & parse JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creates connection to mySQL database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

//selects all entries in the favourite_books table that have an id field, and sets total_count equal to the total, in this case, 13
//groups the entries in the table by whether or not they are in stock; 10 in-stock : 3 not in stock, which is printed to console
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

//selects and logs various pieces of data regarding the books in each section
//sums total numbers of all books including duplicates
//logs the total number of books in the section
//logs the largest number of copies available for a single book
//logs the smallest number of copies available for a single book
//logs the average number of copies available for each book
//repeats the above for all five sections
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
