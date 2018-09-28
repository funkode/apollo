'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BallotData = undefined;

var _BaseData = require('./BaseData');

class BallotData extends _BaseData.BaseData {

  constructor(restURL) {
    super(restURL, 'ballots');
  }

}
exports.BallotData = BallotData;