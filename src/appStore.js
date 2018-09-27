import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { carsReducer } from './reducers/carsReducer';
import { editCarIdReducer } from './reducers/editCarIdReducer';
import { selectedCarIdsReducer } from './reducers/selectedCarIdsReducer';
import { loadingReducer } from './reducers/loadingReducer';

export const appStore = createStore(
  combineReducers({
    cars: carsReducer,
    editCarId: editCarIdReducer,
    selectedCarIds: selectedCarIdsReducer,
    loading: loadingReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);