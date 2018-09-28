import React from 'react';

import {ToolHeader} from './ToolHeader';
import {CreateElection} from './CreateElection';
import {withBallotsQuery} from '../../queries/ballots/BallotQuery';

const ElectionContainer = withBallotsQuery(CreateElection);

export const ElectionManagement = (props) => {
   return (
   <div>
       <ToolHeader headerText="Election Management" />
       <ElectionContainer />
   </div>);
}

