import React from 'react';

import {ToolHeader} from './ToolHeader';
import {CreateElection} from './CreateElection';
import {ListElections} from './ListElections';
import {withElectionsQuery} from '../../queries/elections/ElectionQuery';
import {withAppendElectionMutation} from '../../mutations/elections/AppendElectionMutation';

const ListElectionsContainer = withElectionsQuery(ListElections);
const CreateElectionContainer = withAppendElectionMutation(CreateElection);

export const ElectionManagement = (props) => {
   return (
   <div>
       <ToolHeader headerText="Election Management" />
       <ListElectionsContainer />
       <CreateElectionContainer />
   </div>);
}
