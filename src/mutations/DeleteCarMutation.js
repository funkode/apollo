import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($carId: ID) {
    deleteCar(carId: $carId) {
      id
    }
  }
`;

export const DeleteCarMutation = props =>
  <Mutation mutation={DELETE_CAR_MUTATION}>
    {mutate => {

      const deleteCar = carId => {
        return mutate({
          variables: { carId },
          refetchQueries: props.refetchQueries,
        });
      };

      const TheComponent = props.children;

      return <TheComponent {...props} onDeleteCar={deleteCar} />;
    }}
  </Mutation>;
