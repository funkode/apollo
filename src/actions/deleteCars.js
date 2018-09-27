import { refreshCars } from './refreshCars';

export const DELETE_CARS_REQUEST = 'DELETE_CARS_REQUEST';
export const DELETE_CARS_DONE = 'DELETE_CARS_DONE';

export const createDeleteCarsRequestAction = () => ({
  type: DELETE_CARS_REQUEST,
});

export const createDeleteCarsDoneAction = car => ({
  type: DELETE_CARS_DONE, payload: car,
});

export const deleteCars = carIds => {

  return dispatch => {

    dispatch(createDeleteCarsRequestAction());

    return Promise.all(
      carIds.map(carId => fetch('http://localhost:3020/cars/' + encodeURIComponent(carId), {
        method: 'DELETE',
      }))
    ).then(() => dispatch(refreshCars()));

  };

};