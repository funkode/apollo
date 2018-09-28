import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {ELECTION_QUERY} from '../../queries/elections/ElectionQuery'

export const APPEND_ELECTION_MUTATION = gql`
    mutation AppendElection($election: InputElection) {
        appendElection(election: $election) {
            id,
            name,
            questions {
                question,
                id
            }
        }
    }`;

export const withAppendElectionMutation = graphql(APPEND_ELECTION_MUTATION, {
  props: ({ mutate }) => ({
    onAppendElection: election =>
      mutate({
          variables: { election },
          refetchQueries: [{query: ELECTION_QUERY}]
        })
  }),
});