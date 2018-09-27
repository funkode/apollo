'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeDefs = exports.typeDefs = _graphqlTag2.default`
  type Query {
    myMessage: String
    cars: [Car]
    car(carId: ID): Car
  }

  type Mutation {
    appendCar(car: AppendCar): Car
    replaceCar(car: ReplaceCar): Car
    deleteCar(carId: ID): Car
    deleteCars(carIds: [ID]): [Car]
  }

  type Subscription {
    carAppended: Car
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input ReplaceCar {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

`;