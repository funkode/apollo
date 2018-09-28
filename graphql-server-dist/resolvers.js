'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _index = require('./index');

var _VoterData = require('./VoterData');

var _ElectionData = require('./ElectionData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VOTER_REGISTERED = 'voterRegistered';
const VOTER_REPLACED = 'voterReplaced';
const VOTER_DELETED = 'voterDeleted';

const resolvers = exports.resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/message`).then(res => res.json()).then(({ text }) => text);
    },
    voters: (_1, _2, { restURL }) => new _VoterData.VoterData(restURL).all(),
    voter: (_, { voterId }, { restURL }) => new _VoterData.VoterData(restURL).one(voterId),
    getElections: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/elections`).then(res => {
        return res.json();
      });
    },
    getElection: (_1, { lid }, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/elections`).then(res => {
        return res.json();
      }).then(res => {
        const result = res.filter(c => c.id == lid);
        return result[0];
      });
    }
  },
  Mutation: {
    registerVoter: async (_, { voter }, { restURL }) => {
      const voterData = new _VoterData.VoterData(restURL);
      const voterRegistered = await voterData.append(voter);
      _index.pubsub.publish(VOTER_REGISTERED, { voterRegistered });
      return voterRegistered;
    },
    simpleLogin: (_1, { cred }, { restURL }) => (0, _nodeFetch2.default)(`${restURL}/voters/` + cred.id).then(res => res.json()).then(res => {
      const empty = res === {};
      if (empty) {
        return false;
      }
      const compareFields = res.id == cred.id && res.firstName === cred.firstName && res.lastName === cred.lastName && res.email === cred.email;
      return {
        id: res.id,
        authToken: compareFields
      };
    }),
    replaceVoter: async (_, { voter }, { restURL }) => {
      const voterData = new _VoterData.VoterData(restURL);
      const voterReplaced = await voterData.replace(voter);
      _index.pubsub.publish(VOTER_REPLACED, { voterReplaced });
      return voterReplaced;
    },
    deleteVoter: async (_, { voterId }, { restURL }) => {
      const voterData = new _VoterData.VoterData(restURL);
      const voterDeleted = await voterData.delete(voterId);
      _index.pubsub.publish(VOTER_DELETED, { voterDeleted });
      return voterDeleted;
    },
    deleteVoters: (_, { voterIds }, { restURL }) => new _VoterData.VoterData(restURL).deleteMany(voterIds),
    appendElection: async (_, { election }, { restURL }) => {
      const electionData = new _ElectionData.ElectionData(restURL);
      const addedElection = await electionData.append(election);
      return addedElection;
    },
    createBallot: (_1, { ballot }, { restURL }) => {
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

      return (0, _nodeFetch2.default)(`${restURL}/ballots/`, {
        method: 'POST',
        body: JSON.stringify(ballot),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(res => {
        console.log("CREATED BALLOT", res);
        return true;
      });
    }
  },
  Subscription: {
    voterRegistered: {
      subscribe: () => {
        return _index.pubsub.asyncIterator(VOTER_REGISTERED);
      }
    },
    voterReplaced: {
      subscribe: () => {
        return _index.pubsub.asyncIterator(VOTER_REPLACED);
      }
    },
    voterDeleted: {
      subscribe: () => {
        return _index.pubsub.asyncIterator(VOTER_DELETED);
      }
    }
  }
};