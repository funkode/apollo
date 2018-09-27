import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const VOTERS_QUERY = gql`
  query VoterTableQuery {
    allVoters: voters {
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


export const withVotersQuery = graphql(VOTERS_QUERY, {
  props : ({ data }) => ({
    loading: data.loading,
    errors: data.error,
    voters: data.allVoters,
    onRefreshCars: () => {},
    refetchQueries:[ {query: VOTERS_QUERY } ],
  }) 
}) ;
