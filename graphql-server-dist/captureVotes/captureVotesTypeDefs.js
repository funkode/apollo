'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeDefs = exports.typeDefs = _graphqlTag2.default`
  type Query{
    getBallots: [Ballot]
    simpleLogin(cred: Login): Boolean
    getBallot(lid:ID): Ballot
  }
  type Mutation{
    simpleLogin(cred: Login): Boolean
  }
  type Voters {
    id:ID,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    birthdate: String,
    email: String,
    phone: String
  }
  input Login{
    id:ID,
    firstName: String,
    lastName: String,
    email: String
  }
  type Ballot{
    id:ID,
    name: String
    questions: [Question]
  }
  type Question{
    id:ID,
     question:String
  }

`;