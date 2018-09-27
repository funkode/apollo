import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const BALLOTS_QUERY = gql`
    query BallotTableQuery {
        allBallots:getBallots{
            id
            name
            questions {
                id
                question
            }
            voters
        }
    }
`;

export const withBallotsQuery = graphql(BALLOTS_QUERY, {
  props : ({ data }) => ({
    loading: data.loading,
    errors: data.error,
    ballots: data.allBallots,
    onRefreshCars: () => {},
    refetchQueries:[ {query: BALLOTS_QUERY } ],
  }) 
}) ;