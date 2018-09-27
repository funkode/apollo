'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseData = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BaseData {

  constructor(restURL, elementName) {
    this._restURL = restURL;
    this._elementName = elementName;
  }

  collectionUrl() {
    return `${this._restURL}/${this._elementName}`;
  }

  elementUrl(elementId) {
    return `${this._restURL}/${this._elementName}/${encodeURIComponent(elementId)}`;
  }

  fetchOptions(data, method = 'POST') {

    const bodyMethods = ['POST', 'PUT'];

    let options = { method };

    if (bodyMethods.includes(method)) {
      options.body = JSON.stringify(data);
      options.headers = { 'Content-Type': 'application/json' };
    }

    return options;
  }

  async all() {
    const res = await (0, _nodeFetch2.default)(this.collectionUrl());
    const elements = await res.json();
    return elements;
  }

  async one(elementId) {
    const res = await (0, _nodeFetch2.default)(this.elementUrl(elementId));
    const element = await res.json();
    return element;
  }

  async append(element) {
    const res = await (0, _nodeFetch2.default)(this.collectionUrl(), this.fetchOptions(element));
    const insertedElement = await res.json();
    return insertedElement;
  }

  async replace(element) {
    const originalElement = await this.one(element.id);
    await (0, _nodeFetch2.default)(this.elementUrl(element.id), this.fetchOptions(element, 'PUT'));
    return originalElement;
  }

  async delete(elementId) {
    const originalElement = await this.one(elementId);
    await (0, _nodeFetch2.default)(this.elementUrl(elementId), this.fetchOptions(null, 'DELETE'));
    return originalElement;
  }

  async deleteMany(elementIds) {

    const elements = await Promise.all(elementIds.map(async elementId => await this.one(elementId)));

    await Promise.all(elementIds.map(async elementId => await this.delete(elementId)));

    return elements;
  }
}
exports.BaseData = BaseData;