import { refreshCars } from './refreshCars';

export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE = 'REPLACE_CAR_DONE';

export const createReplaceCarRequestAction = () => ({
  type: REPLACE_CAR_REQUEST,
});

export const createReplaceCarDoneAction = car => ({
  type: REPLACE_CAR_DONE, payload: car,
});

export const replaceCar = car => {

  return dispatch => {

    dispatch(createReplaceCarRequestAction());

    return fetch('http://localhost:3020/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(() => dispatch(refreshCars()));

  };

};