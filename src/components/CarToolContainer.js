import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createAddSelectedCarAction, createRemoveSelectedCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/cars';
import { refreshCars } from '../actions/refreshCars';
import { appendCar } from '../actions/appendCar';
import { replaceCar } from '../actions/replaceCar';
import { deleteCar } from '../actions/deleteCar';
import { deleteCars } from '../actions/deleteCars';

import { CarTool } from './CarTool';

export const CarToolContainer = connect(
  ({ cars, editCarId, selectedCarIds }) => ({ cars, editCarId, selectedCarIds }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    onAppendCar: appendCar,
    onDeleteCar: deleteCar,
    onReplaceCar: replaceCar,
    onDeleteCars: deleteCars,
    onAddSelectedCar: createAddSelectedCarAction,
    onRemoveSelectedCar: createRemoveSelectedCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);