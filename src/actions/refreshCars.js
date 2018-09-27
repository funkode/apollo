
export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST,
});

export const createRefreshCarsDoneAction = cars => ({
  type: REFRESH_CARS_DONE, payload: cars,
});

export const refreshCars = () => {

  return dispatch => {

    dispatch(createRefreshCarsRequestAction());

    return fetch('http://localhost:3020/cars')
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));

  };

};