// TODO: What are we importing? an node library package for reading & writing files
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// log.txt; the file that will be appended, a new file with that name will be created if it does not exist
// ${process.argv[2]}\n; the content of the 2nd index of process.argv (first input by user via node) will be added to log.txt on a new line
// (err); if any error occurs during the operation, its associated data will be stored in this object
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // "err ?" determines whether "err" is true or false;
  // if it is true (i.e. an error occured), the error is logged to the console
  // otherwise, 'Commit logged!' is logged to the console.
  err ? console.error(err) : console.log('Commit logged!')
);
