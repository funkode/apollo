import React from 'react';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export class CarTable extends React.Component {

  // BAD CODE - MOVE THIS OUT OF THE COMPONENT
  componentDidMount() {
    this.props.onRefreshCars();
  }

  render() {
    return <CarTableImpl {...this.props} />;
  }
}

const CarTableImpl = ({
  cars, editCarId, selectedCars, onDeleteCar,
  onEditCar, onSaveCar, onCancelCar,
  onAddSelectedCar, onRemoveSelectedCar, onDeleteSelectedCars,
  bulkDeleteButtonText,
}) => {

  const selectCar = ({ checked, carId }) => {
    if (checked) {
      onAddSelectedCar(carId);
    } else {
      onRemoveSelectedCar(carId);
    }
  };

  return <React.Fragment>
    <button type="button" onClick={() => onDeleteSelectedCars(selectedCars)}>{bulkDeleteButtonText}</button>
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car}
            onSaveCar={onSaveCar} onCancelCar={onCancelCar}
            onSelectCar={selectCar} selected={selectedCars.includes(car.id)} />
          : <CarViewRow key={car.id} car={car}
            onEditCar={onEditCar} onDeleteCar={onDeleteCar}
            onSelectCar={selectCar} selected={selectedCars.includes(car.id)} />
        )}
      </tbody>
    </table>
  </React.Fragment>;
};

CarTableImpl.defaultProps = {
  editCarId: -1,
  selectedCars: [],
  bulkDeleteButtonText: 'Delete Selected Cars',
};
