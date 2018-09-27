import React from 'react';

export class CarEditRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      make: props.car.make,
      model: props.car.model,
      year: props.car.year,
      color: props.car.color,
      price: props.car.price,
    };
  }

  change = evt => {
    this.setState({
      [ evt.target.name ]: evt.target.type === 'number'
        ? Number(evt.target.value)
        : evt.target.value,
    });
  };

  saveCar = () => {
    console.log(this.props);
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  };

  render() {
    return <tr>
      <td><input type="checkbox" checked={this.props.selected}
        onChange={evt => this.props.onSelectCar({ checked: evt.target.checked, carId: this.props.car.id })} /></td>
      <td>{this.props.car.id}</td>
      <td>
        <input type="text" name="make" value={this.state.make} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="model" value={this.state.model} onChange={this.change} />
      </td>
      <td>
        <input type="number" name="year" value={this.state.year} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="color" value={this.state.color} onChange={this.change} />
      </td>
      <td>
        <input type="number" name="price" value={this.state.price} onChange={this.change} />
      </td>
      <td>
        <button type="button" onClick={this.saveCar}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }

}
