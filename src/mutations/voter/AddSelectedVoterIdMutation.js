import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const ADD_SELECTED_VOTER_ID_MUTATION = gql`
  mutation AddSelectedVoterId($voterId: ID) {
    addSelectedVoterId(voterId: $voterId) @client
  }
`;

export const withAddSelectedVoterIdMutation = graphql(ADD_SELECTED_VOTER_ID_MUTATION, {
  props: ({ mutate }) => ({
    onAddSelectedVoterId: voterId =>
      mutate({ variables: { voterId } })
  }),
});
