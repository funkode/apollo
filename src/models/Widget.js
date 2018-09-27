export class Widget {
  constructor(widgetData) {
    Object.assign(this, widgetData);
  }

  getInfo() {
    return this.name + ' ' + this.size + ' ' + this.price;
  }
}


