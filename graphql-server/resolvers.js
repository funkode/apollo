import fetch from 'node-fetch';
import { pubsub } from './index';

import { VoterData } from './VoterData';

const VOTER_REGISTERED = 'voterRegistered';

export const resolvers = {
  Query: {
    voters: (_1, _2, { restURL }) =>
      fetch(`${restURL}/voters`)
        .then(res => res.json()),
  },
  Mutation: {
    registerVoter: async (_, { voter }, { restURL }) => {
      const voterData = new VoterData(restURL);
      const voterRegistered = await voterData.append(voter);
      pubsub.publish(VOTER_REGISTERED, { voterRegistered });
      return voterRegistered;
    },
  },
  Subscription: {
    voterRegistered: {
      subscribe: () => {
        return pubsub.asyncIterator(VOTER_REGISTERED);
      },
    },
  },
};
