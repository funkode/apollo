import { REFRESH_CARS_REQUEST, REFRESH_CARS_DONE } from '../actions/refreshCars';
import { APPEND_CAR_REQUEST, APPEND_CAR_DONE } from '../actions/appendCar';
import { REPLACE_CAR_REQUEST, REPLACE_CAR_DONE } from '../actions/replaceCar';
import { DELETE_CAR_REQUEST, DELETE_CAR_DONE } from '../actions/deleteCar';
import { DELETE_CARS_REQUEST, DELETE_CARS_DONE } from '../actions/deleteCars';

export const loadingReducer = (state = false, action) => {

  switch(action.type) {
  case REFRESH_CARS_REQUEST:
  case APPEND_CAR_REQUEST:
  case REPLACE_CAR_REQUEST:
  case DELETE_CAR_REQUEST:
  case DELETE_CARS_REQUEST:
    return true;
  case REFRESH_CARS_DONE:
  case APPEND_CAR_DONE:
  case REPLACE_CAR_DONE:
  case DELETE_CAR_DONE:
  case DELETE_CARS_DONE:
    return false;
  default:
    return state;
  }

};