import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    myMessage: String
    voters: [Voter]
    voter(voterId: ID): Voter
    getBallots: [Ballot]
    simpleLogin(cred: Login): Boolean
    getBallot(lid:ID): Ballot
  }

  type Mutation {
    registerVoter(voter: RegisterVoter): Voter
    replaceVoter(voter: ReplaceVoter): Voter
    deleteVoter(voterId: ID): Voter
    deleteVoters(voterIds: [ID]): [Voter]
    simpleLogin(cred: Login): Boolean
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

  type Ballot{
    id:ID,
    name: String,
    questions: [Question],
    voters: [ID]
  }

  input Login{
    id:ID,
    firstName: String,
    lastName: String,
    email: String
  }

  type Question{
    id:ID,
     question:String
  }
`;