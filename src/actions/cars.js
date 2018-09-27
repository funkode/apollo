
export const ADD_SELECTED_CAR = 'ADD_SELECTED_CAR';
export const REMOVE_SELECTED_CAR = 'REMOVE_SELECTED_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const createAddSelectedCarAction = carId => ({ type: ADD_SELECTED_CAR, payload: carId });
export const createRemoveSelectedCarAction = carId => ({ type: REMOVE_SELECTED_CAR, payload: carId });
export const createEditCarAction = carId => ({ type: EDIT_CAR, payload: carId });
export const createCancelCarAction = () => ({ type: CANCEL_CAR });