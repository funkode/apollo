'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureVotesResolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const captureVotesResolvers = exports.captureVotesResolvers = {
  Query: {
    getBallots: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/ballots`).then(res => res.json()).then(({ text }) => text);
    }

  }
};