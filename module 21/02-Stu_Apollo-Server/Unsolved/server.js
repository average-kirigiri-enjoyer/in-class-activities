const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// imports the apollo server & express middleware from the respective apollo packages
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// TODO: Add a comment describing the functionality of this expression
// imports the type definitions & resolver functions from the schemas folder
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

// TODO: Add a comment describing the functionality of this async function
// this function is used to start the apollo server
const startApolloServer = async () => {
  await server.start(); //start the apollo server instance
  
  app.use(express.urlencoded({ extended: false })); //sets server to process incoming url-encoded data
  app.use(express.json()); //sets server to process incoming JSON data
  
  app.use('/graphql', expressMiddleware(server)); //sets server to use graphQL as part of the middleware

  //connects to the database and starts running the server + graphQL extension at the appropriate port
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
};

// TODO: Add a comment describing this functionality
startApolloServer();
