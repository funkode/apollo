import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components';

const cars = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2010, color: 'blue', price: 34000 },
  { id: 2, make: 'Ford', model: 'T', year: 1914, color: 'black', price: 400 },
];

const renderColorTool = () => {
  ReactDOM.render(
    <CarTool cars={cars} />,
    document.querySelector('#root'),
  );
};

renderColorTool();
