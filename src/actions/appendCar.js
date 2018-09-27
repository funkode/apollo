import { refreshCars } from './refreshCars';

export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';
export const APPEND_CAR_DONE = 'APPEND_CAR_DONE';

export const createAppendCarRequestAction = () => ({
  type: APPEND_CAR_REQUEST,
});

export const createAppendCarDoneAction = car => ({
  type: APPEND_CAR_DONE, payload: car,
});

export const appendCar = car => {

  return dispatch => {

    dispatch(createAppendCarRequestAction());

    return fetch('http://localhost:3020/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(() => dispatch(refreshCars()));

  };

};