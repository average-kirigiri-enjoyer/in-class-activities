const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  //when a reader is deleted from the database, the effect cascades & their associated library card is also deleted
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// exports the Reader & LibraryCard models for use in other parts of the application
module.exports = { Reader, LibraryCard };
