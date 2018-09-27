import gql from 'graphql-tag';

export const SET_EDIT_CAR_ID_MUTATION = gql`
  mutation SetEditCarIdMutation($carId: ID) {
    setEditCarId(editCarId: $carId) @client
  }
`;

