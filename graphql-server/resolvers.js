import fetch from 'node-fetch';
import { pubsub } from './index';

import { VoterData } from './VoterData';

export const resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/message`)
        .then(res => res.json())
        .then(({ text }) => text);
    },
    voters: (_1, _2, { restURL }) => new VoterData(restURL).all(),
    voter: (_, { voterId }, { restURL }) => new VoterData(restURL).one(voterId),
  },
  Mutation: {
    appendVoter: async (_, { voter }, { restURL }) => {
      const voterData = new VoterData(restURL);
      const voterAppended = await voterData.append(voter);
      pubsub.publish('voterAppended', { voterAppended });
      return voterAppended;
    },
    replaceVoter: (_, { voter }, { restURL }) => new VoterData(restURL).replace(voter),
    deleteVoter: (_, { voterId }, { restURL }) => new VoterData(restURL).delete(voterId),
    deleteVoters: (_, { voterIds }, { restURL }) => new VoterData(restURL).deleteMany(voterIds),
  },
  Subscription: {
    voterAppended: {
      subscribe: () => {
        return pubsub.asyncIterator('voterAppended');
      },
    },
  },
};
