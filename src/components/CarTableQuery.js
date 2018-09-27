import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteCarMutation } from '../mutations/DeleteCarMutation';

export const CAR_TABLE_QUERY = gql`
  query CarTableQuery {
    cars {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export const CarTableQuery = props =>
  <Query query={CAR_TABLE_QUERY}>
    {({ data, loading, error}) => {

      if (loading) return 'Loading...';
      
      if (error) {
        console.log(error);
        return null;
      }

      return <DeleteCarMutation {...props} refetchQueries={[ { query: CAR_TABLE_QUERY } ]} cars={data.cars} onRefreshCars={() => {}} />;
      
    }}
  </Query>;