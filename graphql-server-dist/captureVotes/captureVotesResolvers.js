'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = exports.resolvers = {
  Query: {
    getBallots: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/ballots`).then(res => {
        return res.json();
      });
    },
    getBallot: (_1, { lid }, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/ballots`).then(res => {
        return res.json();
      }).then(res => {
        console.log(res);
        const result = res.filter(c => c.id == lid);
        console.log(result);
        return result[0];
      });
    }

  },
  Mutation: {
    simpleLogin: (_1, { cred }, { restURL }) => (0, _nodeFetch2.default)(`${restURL}/voters/` + cred.id).then(res => res.json()).then(res => {

      const empty = res === {};
      if (empty) {
        return false;
      }
      const compareFields = res.id == cred.id && res.firstName === cred.firstName && res.lastName === cred.lastName && res.email === cred.email;
      return compareFields;
    })
  }
};