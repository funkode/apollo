import { ADD_SELECTED_CAR, REMOVE_SELECTED_CAR } from '../actions/cars';
import { REFRESH_CARS_REQUEST } from '../actions/refreshCars';
import { DELETE_CARS_REQUEST } from '../actions/deleteCars';

export const selectedCarIdsReducer = (state = [], action) => {

  switch(action.type) {
  case DELETE_CARS_REQUEST:
  case REFRESH_CARS_REQUEST:
    return [];
  case ADD_SELECTED_CAR:
    return state.concat(action.payload);
  case REMOVE_SELECTED_CAR:
  default: state.filter(cId => cId !== action.payload);
    return state;
  }
};