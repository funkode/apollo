import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const DELETE_SELECTED_VOTERS_MUTATION = gql`
  mutation DeleteSelectedVotersMutation($voterIds: [ID]) {
    deleteVoters(voterIds: $voterIds) {
      id
    }
  }
`;

export const withDeleteSelectedVotersMutation = graphql(DELETE_SELECTED_VOTERS_MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onDeleteSelectedVoters: voterIds =>
      mutate({
        variables: { voterIds },
        refetchQueries: ownProps.refetchQueries,
        update: (store) => {
          store.writeQuery({
            query: gql`query SelectedVoterIdsQuery { selectedVoterIds @client }`,
            data: { selectedVoterIds: [] },
          });
        },
      }),
  }),
});
