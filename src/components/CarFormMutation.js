import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CarForm } from './CarForm';

const APPEND_CAR_MUTATION = gql`
  mutation AppendCarMutation($car: AppendCar) {
    appendCar(car: $car) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export const CarFormMutation = ({ refetchQueries }) =>
  <Mutation mutation={APPEND_CAR_MUTATION}>
    {mutate => {

      const appendCar = car =>
        mutate({
          variables: { car },
          refetchQueries,
          // optimisticResponse: {
          //   appendCar: {
          //     ...car,
          //     id: '-1',
          //     __typename: 'Car',
          //   },
          // },
          // update(store, { data: { appendCar: car } }) {
          //   const data = store.readQuery(refetchQueries[0]);
          //   data.cars.push(car);
          //   store.writeQuery({ ...refetchQueries[0], data });
          // }
        });

      return <CarForm onSubmitCar={appendCar}
        buttonText="Add Car" />;

    }}
  </Mutation>;

CarFormMutation.propTypes = {
  refetchQueries: PropTypes.array,
};