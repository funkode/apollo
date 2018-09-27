import fetch from 'node-fetch';


export class BaseData {

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
    const res = await fetch(this.collectionUrl());
    const elements = await res.json();
    return elements;
  }

  async one(elementId) {
    const res = await fetch(this.elementUrl(elementId));
    const element = await res.json();
    return element;
  }

  async append(element) {
    const res = await fetch(this.collectionUrl(), this.fetchOptions(element));
    const insertedElement = await res.json();
    return insertedElement;
  }

  async replace(element) {
    const originalElement = await this.one(element.id);
    await fetch(this.elementUrl(element.id), this.fetchOptions(element, 'PUT'));
    return originalElement;
  }

  async delete(elementId) {
    const originalElement = await this.one(elementId);
    await fetch(this.elementUrl(elementId), this.fetchOptions(null, 'DELETE'));
    return originalElement;
  }

  async deleteMany(elementIds) {

    const elements = await Promise.all(elementIds.map(async elementId =>
      await this.one(elementId)));

    await Promise.all(elementIds.map(async elementId =>
      await this.delete(elementId)));

    return elements;
  }
}