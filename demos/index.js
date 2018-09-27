
function doIt() {

}

const doIt = () => {

};



const module = (function() {

  function Widget(widgetData) {
    // value of this is only set if the function is called with the
    // new operator
    Object.assign(this, widgetData);
  }

  // default
  // return Widget;

  // named
  return {
    Widget: Widget
  };

})();

// const Doors = module;

// destructuring
// const Widget = module.Widget;
const { Widget } = module;



// without curly braces are known as default imports/exports
import React from 'react';
import ReactDOM from 'react-dom';

// with the curly braces are known as named imports/exports
import { Widget } from './models/Widget';

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  colors: [ 'red', 'green', 'blue' ],
};


const ToolHeader = (props) => {

  return <header>
    <h1>{props.headerText}</h1>
  </header>;
};

const ItemList = props => <ul>
  {props.colors.map(color => <li key={color}>{color}</li>)}
</ul>;

ReactDOM.render(
  <div>
    <ToolHeader headerText={person.firstName + ' ' + person.lastName} />
    <ItemList colors={person.colors} />
  </div>,
  document.querySelector('#root'),
);

