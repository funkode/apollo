import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { appStore } from './appStore';
import { CarTool } from './components';

ReactDOM.render(
  <Provider store={appStore}>
    <CarTool />
  </Provider>,
  document.querySelector('#root'),
);
