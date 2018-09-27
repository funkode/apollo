'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarData = undefined;

var _BaseData = require('./BaseData');

class CarData extends _BaseData.BaseData {

  constructor(restURL) {
    super(restURL, 'cars');
  }

}
exports.CarData = CarData;