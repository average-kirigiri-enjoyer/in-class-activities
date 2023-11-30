const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # defines a class for a mongoDB document with an _id, name, building (string), and number of credit hours
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # defines a query to find & return any existing 'Class' documents from the database, as defined above
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
