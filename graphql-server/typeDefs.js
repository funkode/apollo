import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    myMessage: String
    voters: [Voter]
    voter(voterId: ID): Voter
    getElections: [Election]
    getElection(lid:ID): Election
    getBallot: [TypeBallot]
    getBallotsVoted(electionId:ID):[ID]
  }

  type Mutation {
    registerVoter(voter: RegisterVoter): Voter
    replaceVoter(voter: ReplaceVoter): Voter
    deleteVoter(voterId: ID): Voter
    deleteVoters(voterIds: [ID]): [Voter]
    simpleLogin(cred: Login): LogAuth
    appendElection(election: InputElection): Election
    createBallot(ballot: Ballot): Boolean
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
    votes: [ID]
  }
  input Ballot{
    id:ID,
    electionId: ID,
    userId: ID,
    votes: [ID]

  }
  type TypeBallot{
    id:ID,
    electionId: ID,
    userId: ID,
    votes: [ID]

  }

  input InputElection {
    name: String,
    questions: [InputQuestion],
    votes: [ID]
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
