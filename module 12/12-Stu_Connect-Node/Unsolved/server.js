//imports libraries & packages
const express = require('express');
const mysql = require('mysql2');

//defines port & links express to app constant
const PORT = process.env.PORT || 3001;
const app = express();

//initializes express app middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//establishes connection to the classlist_db database using mysql2
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`) //logs that connection to database was successful
);

//selects all entries & fields in the 'students' table
db.query('SELECT * FROM students', function (err, results) {
  console.log(results); //logs the results from the query to the 'students' table
});

//if there is a 404 response status, the response process will end
app.use((req, res) => {
  res.status(404).end();
});

//initializes express server at the appropriate port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
