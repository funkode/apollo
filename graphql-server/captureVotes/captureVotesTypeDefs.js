import gql from 'graphql-tag';

export const typeDefs = gql`
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
