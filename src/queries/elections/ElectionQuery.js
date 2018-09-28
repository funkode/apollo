import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const ELECTION_QUERY = gql`
    query ElectionTableQuery {
        allElections:getElections{
            id
            name
            questions {
                id
                question
            }
        }
    }
`;

export const withElectionsQuery = graphql(ELECTION_QUERY, {
  props : ({ data }) => ({
    loading: data.loading,
    errors: data.error,
    elections: data.allElections,
    //onRefreshCars: () => {},
    refetchQueries:[ {query: ELECTION_QUERY } ],
  })
}) ;