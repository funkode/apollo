import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const DELETE_VOTER_MUTATION = gql`
mutation DeleteVoter($voterId: ID) {
  deleteVoter(voterId: $voterId) {
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

export const withDeleteVoterMutation = graphql(DELETE_VOTER_MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onDeleteVoter: voterId => mutate({
      variables: { voterId },
      refetchQueries: ownProps.refetchQueries,
    }),
  }),
});
