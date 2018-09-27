'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _index = require('./index');

var _VoterData = require('./VoterData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = exports.resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/message`).then(res => res.json()).then(({ text }) => text);
    },
    voters: (_1, _2, { restURL }) => new _VoterData.VoterData(restURL).all(),
    voter: (_, { voterId }, { restURL }) => new _VoterData.VoterData(restURL).one(voterId)
  },
  Mutation: {
    appendVoter: async (_, { voter }, { restURL }) => {
      const voterData = new _VoterData.VoterData(restURL);
      const voterAppended = await voterData.append(voter);
      _index.pubsub.publish('voterAppended', { voterAppended });
      return voterAppended;
    },
    replaceVoter: (_, { voter }, { restURL }) => new _VoterData.VoterData(restURL).replace(voter),
    deleteVoter: (_, { voterId }, { restURL }) => new _VoterData.VoterData(restURL).delete(voterId),
    deleteVoters: (_, { voterIds }, { restURL }) => new _VoterData.VoterData(restURL).deleteMany(voterIds)
  },
  Subscription: {
    voterAppended: {
      subscribe: () => {
        return _index.pubsub.asyncIterator('voterAppended');
      }
    }
  }
};