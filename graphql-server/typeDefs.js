import gql from 'graphql-tag';

export const typeDefs = gql`
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
