const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// uses the defined classes query to create a resolvers function the apollo server can use to
// respond to requests for data
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // retrieves all class documents from the database
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
