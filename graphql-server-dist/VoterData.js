'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoterData = undefined;

var _BaseData = require('./BaseData');

class VoterData extends _BaseData.BaseData {

  constructor(restURL) {
    super(restURL, 'voters');
  }

}
exports.VoterData = VoterData;