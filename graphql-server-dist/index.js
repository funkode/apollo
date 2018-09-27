'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pubsub = undefined;

var _apolloServer = require('apollo-server');

var _graphqlSubscriptions = require('graphql-subscriptions');

var _captureVotesTypeDefs = require('./captureVotes/captureVotesTypeDefs');

var _captureVotesResolvers = require('./captureVotes/captureVotesResolvers');

const GRAPHQL_PORT = process.env.PORT || 3010;
const REST_PORT = process.env.REST_PORT || 3020;
const REST_SERVER_URL = `http://localhost:${REST_PORT}`;

const context = {
  restURL: REST_SERVER_URL
};

const server = new _apolloServer.ApolloServer({
  typeDefs: _captureVotesTypeDefs.typeDefs,
  resolvers: _captureVotesResolvers.resolvers,
  context
});

const pubsub = exports.pubsub = new _graphqlSubscriptions.PubSub();

server.listen({ port: GRAPHQL_PORT }).then(({ url }) => {
  console.log(`graphql server url: ${url}`);
}).catch(err => {
  console.error('graphql server failed to start');
  console.error(err.message || err);
});