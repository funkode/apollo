import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  appendCar
} from '../actions/appendCar';

import { CarForm } from './CarForm';

export const CarFormContainer = connect(
  () => ({ buttonText: 'Add Car' }),
  dispatch => bindActionCreators({
    onSubmitCar: appendCar,
  }, dispatch),
)(CarForm);