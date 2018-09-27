import { REFRESH_CARS_REQUEST } from '../actions/refreshCars';
import { APPEND_CAR_REQUEST } from '../actions/appendCar';
import { REPLACE_CAR_REQUEST } from '../actions/replaceCar';
import { DELETE_CAR_REQUEST } from '../actions/deleteCar';
import { DELETE_CARS_REQUEST } from '../actions/deleteCars';

import { EDIT_CAR } from '../actions/cars';

export const editCarIdReducer = (state = -1, action) => {

  switch(action.type) {
  case REFRESH_CARS_REQUEST:
  case APPEND_CAR_REQUEST:
  case REPLACE_CAR_REQUEST:
  case DELETE_CAR_REQUEST:
  case DELETE_CARS_REQUEST:
    return -1;
  case EDIT_CAR:
    return action.payload;
  default:
    return state;

  }

};