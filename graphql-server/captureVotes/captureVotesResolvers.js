import fetch from 'node-fetch';
import { pubsub } from '../index';


export const resolvers = {
  Query: {
    getBallots: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/ballots`)
        .then(res => {
          return res.json();
        });
    },
    getBallot: (_1, {lid} , {restURL})=>{
      return fetch(`${restURL}/ballots`)
        .then(res => {
          return res.json();
        }).then(res=>{
          console.log(res);
          const result = res.filter(c=> c.id==lid);
          console.log(result);
          return result[0];
        })
    }

  },
  Mutation: {
    simpleLogin:(_1,{cred},{restURL})=>fetch(`${restURL}/voters/`+cred.id)
      .then(
        res=>res.json()
      ).then(
        res=>{

          const empty = res==={};
          if(empty){
            return false;
          }
          const compareFields = res.id==cred.id
                              && res.firstName===cred.firstName
                              && res.lastName===cred.lastName
                              && res.email===cred.email;
          return compareFields ;
        }
      )
  }
};
