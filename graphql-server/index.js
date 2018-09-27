import { ApolloServer } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const GRAPHQL_PORT = process.env.PORT || 3010;
const REST_PORT = process.env.REST_PORT || 3020;
const REST_SERVER_URL = `http://localhost:${REST_PORT}`;

const context = {
  restURL: REST_SERVER_URL,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

export const pubsub = new PubSub();

server.listen({ port: GRAPHQL_PORT })
  .then(({ url }) => {
    console.log(`graphql server url: ${url}`);
  })
  .catch((err) => {
    console.error('graphql server failed to start');
    console.error(err.message || err);
  });
