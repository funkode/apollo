import React from 'react';

import {ToolHeader} from './ToolHeader';
import {CreateElection} from './CreateElection';
import {withElectionsQuery} from '../../queries/elections/ElectionQuery';

const ElectionContainer = withElectionsQuery(CreateElection);

export const ElectionManagement = (props) => {
   return (
   <div>
       <ToolHeader headerText="Election Management" />
       <ElectionContainer />
   </div>);
}
