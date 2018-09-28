import fetch from 'node-fetch';
import { pubsub } from './index';

import { VoterData } from './VoterData';
import { ElectionData } from './ElectionData';
const VOTER_REGISTERED = 'voterRegistered';
const VOTER_REPLACED = 'voterReplaced';
const VOTER_DELETED = 'voterDeleted';

export const resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/message`)
        .then(res => res.json())
        .then(({ text }) => text);
    },
    voters: (_1, _2, { restURL }) => new VoterData(restURL).all(),
    voter: (_, { voterId }, { restURL }) => new VoterData(restURL).one(voterId),
    getElections: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/elections`,
        {
          method:'GET',
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          return res.json();
        });
    },
    getElection: (_1, {lid} , {restURL})=>{
      return fetch(`${restURL}/elections`)
        .then(res => {
          return res.json();
        }).then(res=>{
          const result = res.filter(c=> c.id==lid);
          return result[0];
        })
    },
    getBallot(_1,_2,{restURL}){
      return fetch(`${restURL}/ballots`)
        .then(res => {
          return res.json();
        });
    },
    getBallotsVoted(_1,{electionId},{restURL}){
      console.log(electionId);
      return fetch(`${restURL}/ballots`)
        .then(res => {
          return res.json();
        }).then(res=>{
          const result=res.filter(ballot=>ballot.electionId==electionId);
          const idList= result.map(ballot=>ballot.userId);
          console.log(idList);
          return idList;
        })
    }
  },
  Mutation: {
    registerVoter: async (_, { voter }, { restURL }) => {
      const voterData = new VoterData(restURL);
      const voterRegistered = await voterData.append(voter);
      pubsub.publish(VOTER_REGISTERED, { voterRegistered });
      return voterRegistered;
    },
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
        return {
                id:res.id,
                authToken:compareFields
                };
      }
    ),
    replaceVoter: async (_, { voter }, { restURL }) => {
      const voterData = new VoterData(restURL);
      const voterReplaced = await voterData.replace(voter);
      pubsub.publish(VOTER_REPLACED, { voterReplaced });
      return voterReplaced;
    },
    deleteVoter: async (_, { voterId }, { restURL }) => {
      const voterData = new VoterData(restURL);
      const voterDeleted = await voterData.delete(voterId);
      pubsub.publish(VOTER_DELETED, { voterDeleted });
      return voterDeleted;
    },
    deleteVoters: (_, { voterIds }, { restURL }) => new VoterData(restURL).deleteMany(voterIds),
    appendElection: async (_, { election }, { restURL }) => {
      const electionData = new ElectionData(restURL);
      const addedElection = await electionData.append(election);
      return addedElection;
    },
    createBallot: (_1,{ballot},{restURL})=>{
      // const input = {
      //   id:id,
      //   electionId:electionId,
      //   userId:userId,
      //   votes:votes
      // }
      // const input={
      //   id:Number(ballot.id),
      //   electionId:Number(ballot.electronId),
      //   userId:Number(ballot.userId),
      //   votes:ballot.votes
      // }
      console.log(ballot);

      return fetch(
            `${restURL}/ballots/`,
            {
              method:'POST',
              body:JSON.stringify(ballot),
              headers:{
                'Content-Type': 'application/json'
              }
            }
          ).then(res => res.json()
          ).then(
            res=>{
              console.log("CREATED BALLOT",res);
              return true}
          );
    }
  },
  Subscription: {
    voterRegistered: {
      subscribe: () => {
        return pubsub.asyncIterator(VOTER_REGISTERED);
      },
    },
    voterReplaced: {
      subscribe: () => {
        return pubsub.asyncIterator(VOTER_REPLACED);
      },
    },
    voterDeleted: {
      subscribe: () => {
        return pubsub.asyncIterator(VOTER_DELETED);
      },
    },
  },
};
