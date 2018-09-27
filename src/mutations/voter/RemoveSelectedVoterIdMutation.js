import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const REMOVE_SELECTED_VOTER_ID_MUTATION = gql`
  mutation RemoveSelectedVoterId($voterId: ID) {
    removeSelectedVoterId(voterId: $voterId) @client
  }
`;

export const withRemoveSelectedVoterIdMutation = graphql(REMOVE_SELECTED_VOTER_ID_MUTATION, {
  props: ({ mutate }) => ({
    onRemoveSelectedVoterId: voterId =>
      mutate({ variables: { voterId } })
  }),
});
