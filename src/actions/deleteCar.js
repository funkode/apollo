import { refreshCars } from './refreshCars';

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE = 'DELETE_CAR_DONE';

export const createDeleteCarRequestAction = () => ({
  type: DELETE_CAR_REQUEST,
});

export const createDeleteCarDoneAction = car => ({
  type: DELETE_CAR_DONE, payload: car,
});

export const deleteCar = carId => {

  return dispatch => {

    dispatch(createDeleteCarRequestAction());

    return fetch('http://localhost:3020/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshCars()));

  };

};