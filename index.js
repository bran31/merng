const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*", // <- allow request from all domains
    credentials: true,
  }, // <- enable CORS response for requests with credentials (cookies, http authentication)
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`--- Server running at ${res.url} ---`);
    console.log("--- MongoDB Connected ---");
  })
  .catch((err) => {
    console.error(err);
  });
