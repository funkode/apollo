import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddSelectedCarAction, createRemoveSelectedCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/cars';
import { refreshCars } from '../actions/refreshCars';
import { replaceCar } from '../actions/replaceCar';
import { deleteCar } from '../actions/deleteCar';
import { deleteCars } from '../actions/deleteCars';

import { CarTable } from './CarTable';


export const CarTableContainer = connect(
  ({ cars, editCarId, selectedCarIds }) => ({ cars, editCarId, selectedCars: selectedCarIds }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    onDeleteCar: deleteCar,
    onSaveCar: replaceCar,
    onDeleteSelectedCars: deleteCars,
    onAddSelectedCar: createAddSelectedCarAction,
    onRemoveSelectedCar: createRemoveSelectedCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTable);