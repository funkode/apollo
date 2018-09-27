import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const REPLACE_VOTER_MUTATION = gql`
  mutation ReplaceVoter($voter: ReplaceVoter) {
    replaceVoter(voter: $voter) {
      id
      firstName
      lastName
      address
      city
      birthdate
      email
      phone
    }
  }
`;

export const withReplaceVoterMutation = graphql(REPLACE_VOTER_MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSaveVoter: voter => mutate({
      variables: { voter },
      refetchQueries: ownProps.refetchQueries,
      update: (store) => {
        store.writeQuery({
          query: gql`query EditVoterIdQuery { editVoterId @client }`,
          data: { editVoterId: '-1' },
        });
      },
    }),
  }),
});
