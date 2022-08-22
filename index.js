const express = require('express');
const { graphqlHTTP } = require('express-graphql');

var { graphql, buildSchema } = require('graphql');
const { root } = require('postcss');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000);