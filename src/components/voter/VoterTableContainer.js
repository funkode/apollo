import { compose, withApollo } from 'react-apollo';

import { withVotersQuery, withLocalQuery } from '../../queries';

import { 
  withReplaceVoterMutation, withDeleteVoterMutation, withDeleteSelectedVotersMutation,
  withAddSelectedVoterIdMutation, withRemoveSelectedVoterIdMutation, withEditVoterMutation
} from '../../mutations';

import { VoterTable } from './VoterTable';

export const VoterTableContainer = compose([
  withApollo,
  withVotersQuery,
  withLocalQuery,
  withDeleteVoterMutation,
  withAddSelectedVoterIdMutation,
  withRemoveSelectedVoterIdMutation,
  withDeleteSelectedVotersMutation,
  withReplaceVoterMutation,
  withEditVoterMutation,
])(VoterTable);



