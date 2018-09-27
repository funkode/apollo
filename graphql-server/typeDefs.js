import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    voters: [Voter]
  }

  type Mutation {
    registerVoter(voter: RegisterVoter): Voter
  }

  type Subscription {
    voterRegistered: Voter
  }

  type Voter {
    id: ID
    firstName: String
    lastName: String
    address: String
    city: String
    birthdate: String
    email: String
    phone: String
  }
  
  input RegisterVoter {
    firstName: String
    lastName: String
    address: String
    city: String
    birthdate: String
    email: String
    phone: String
  }

`;
