import { 
  REFRESH_CARS_DONE,
} from '../actions/refreshCars';

export const carsReducer = (state = [], action) => {

  switch(action.type) {
  case REFRESH_CARS_DONE:
    return action.payload;
  default:
    return state;
  }

};