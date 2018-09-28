import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    myMessage: String
    voters: [Voter]
    voter(voterId: ID): Voter
    getElections: [Election]
    getElection(lid:ID): Election
  }

  type Mutation {
    registerVoter(voter: RegisterVoter): Voter
    replaceVoter(voter: ReplaceVoter): Voter
    deleteVoter(voterId: ID): Voter
    deleteVoters(voterIds: [ID]): [Voter]
    simpleLogin(cred: Login): LogAuth
    appendElection(election: InputElection): Election

  }

  type Subscription {
    voterRegistered: Voter
    voterReplaced: Voter
    voterDeleted: Voter
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

  type Election{
    id:ID,
    name: String,
    questions: [Question],
  }
  type Ballot{
    id:ID,
    electionId: ID,
    userId: ID,
    votes: [Int]
    questions: [Question]
  }

  input InputElection {
    name: String,
    questions: [InputQuestion]
  }

  input InputQuestion {
    id: ID,
    question:String
  }

  input Login{
    id:ID,
    firstName: String,
    lastName: String,
    email: String
  }

  type LogAuth{
    id:ID,
    authToken:Boolean
  }

  type Question{
    id:ID,
     question:String
  }
`;
