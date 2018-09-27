import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTableContainer } from './CarTableContainer';
import { CarFormContainer } from './CarFormContainer';

export class CarTool extends React.Component {

  render() {
    return <React.Fragment>
      <ToolHeader headerText="Car Tool" />
      <CarTableContainer />
      <CarFormContainer />
    </React.Fragment>;
  }
}
