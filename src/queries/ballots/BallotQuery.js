import React from 'react';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const BALLOTS_QUERY = gql`
    query BallotsTableQuery {
        allBallots:getBallot {
            id,
        electionId,
        userId,
        votes
        }
    }
`;

export const withBallotsQuery = graphql(BALLOTS_QUERY, {
  props : ({ data }) => 
    ({
    loading: data.loading,
    errors: data.error,
    ballots: data.allBallots,
  })
}) ;

export const BallotsQuery = props =>
  <Query query={BALLOTS_QUERY}>
    {({ data, loading, error}) => {

      if (loading) return 'Loading...';
      
      if (error) {
        console.log(error);
        return null;
      }
      console.log("BallotsQuery: ", data);

      return data.allBallots;
      
    }}
  </Query>;
