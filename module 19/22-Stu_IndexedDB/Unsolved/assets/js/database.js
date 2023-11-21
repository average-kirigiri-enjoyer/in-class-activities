import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// opens the 'todos' database, version number 1
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // the 'upgrade' method runs when a database is openend with a higher version number that the currently-existing one
    // the code within will define how the database schema should change during the "upgrade"
    upgrade(db) {
      //if the todos database already exists, log that it already exists to the console, and eject from the function
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // if the 'todos' object store doesn't exist, it is created
      // sets the 'id' property of each object to be the 'key' value, with auto-incrementing IDs automatically assigned to each object
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
