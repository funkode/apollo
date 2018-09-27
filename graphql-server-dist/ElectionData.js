'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElectionData = undefined;

var _BaseData = require('./BaseData');

class ElectionData extends _BaseData.BaseData {

  constructor(restURL) {
    super(restURL, 'elections');
  }

}
exports.ElectionData = ElectionData;