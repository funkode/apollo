import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    myMessage: String
    voters: [Voter]
    voter(voterId: ID): Voter
  }

  type Mutation {
    appendVoter(voter: AppendVoter): Voter
    replaceVoter(voter: ReplaceVoter): Voter
    deleteVoter(voterId: ID): Voter
    deleteVoters(voterIds: [ID]): [Voter]
  }

  type Subscription {
    voterAppended: Voter
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

  input AppendVoter {
    firstName: String
    lastName: String
    address: String
    city: String
    birthdate: String
    email: String
    phone: String
  }

  input ReplaceVoter {
    id: ID
    firstName: String
    lastName: String
    address: String
    city: String
    birthdate: String
    email: String
    phone: String
  }

`;
