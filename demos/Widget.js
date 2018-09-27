
const widget = {
  name: 'A Widget',
  size: 'small',
  price: 20,
};

class Widget {
  constructor(widgetData) {
    // this.name = widgetData.name;
    // this.size = widgetData.size;
    // this.price = widgetData.price;

    // copy the properties from widgetData to the "this" object
    Object.assign(this, widgetData);
  }

  getInfo() {
    return this.name + ' ' + this.size + ' ' + this.price;
  }
}

const aWidget = new Widget({
  name: 'Test Widget',
  size: 'large',
  price: 34.00,
});

const createWidget = (widgetData) => ({
  ...widgetData
});

const bWidget = createWidget('Test Widget', 'large', 34.00)

