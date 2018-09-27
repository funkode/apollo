import React from 'react';
import PropTypes from 'prop-types';

export class CarForm extends React.Component {

  static propTypes = {
    onSubmitCar: PropTypes.func.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  change = evt => {
    this.setState({
      [ evt.target.name ]: evt.target.type === 'number'
        ? Number(evt.target.value)
        : evt.target.value
    });
  };

  submitCar = () => {
    this.props.onSubmitCar({ ...this.state });
    this.setState(this.getInitialState());
  };

  render() {
    return <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make" value={this.state.make} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model" value={this.state.model} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year" value={this.state.year} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color" value={this.state.color} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price" value={this.state.price} onChange={this.change} />
      </div>
      <button type="button" onClick={this.submitCar}>{this.props.buttonText}</button>
    </form>;
  }

}
