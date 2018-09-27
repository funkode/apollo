import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteCarMutation } from '../mutations/DeleteCarMutation';

export const CARS_QUERY = gql`
  query CarsQuery {
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

export const CarsQuery = props =>
  <Query query={CARS_QUERY}>
    {({ data, loading, error}) => {

      if (loading) return 'Loading...';
      
      if (error) {
        console.log(error);
        return null;
      }

      return <DeleteCarMutation {...props} refetchQueries={[ { query: CARS_QUERY } ]} cars={data.cars} onRefreshCars={() => {}} />;
      
    }}
  </Query>;