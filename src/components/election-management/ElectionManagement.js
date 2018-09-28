import React from 'react';

import { compose, withApollo } from 'react-apollo';
import {ToolHeader} from './ToolHeader';
import {CreateElection} from './CreateElection';
import {ListElections} from './ListElections';
import {withElectionsQuery} from '../../queries/elections/ElectionQuery';
import {withBallotsQuery} from '../../queries/ballots/BallotQuery';
import {withAppendElectionMutation} from '../../mutations/elections/AppendElectionMutation';

const ListElectionsContainer = compose([withElectionsQuery, withBallotsQuery])(ListElections);

// compose([withElectionsQuery, withBallotsQuery])(ListElections);

// withElectionsQuery(ListElections);
const CreateElectionContainer = withAppendElectionMutation(CreateElection);
// compose([
//     withAppendElectionMutation,
//   ])(CreateElection);
// withAppendElectionMutation(CreateElection);

export const ElectionManagement = (props) => {
   return (
   <div>
       <ToolHeader headerText="Election Management" />
       <ListElectionsContainer />
       <CreateElectionContainer />
   </div>);
}

