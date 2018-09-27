import React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };

    // this.change = this.change.bind(this);
  }

  // class property
  // this is not valid JavaScript
  change = (evt) => {
    this.setState({
      [ evt.target.name ]: evt.target.type === 'number'
        ? Number(evt.target.value)
        : evt.target.value,
    });
  }

  submitColor = () => {
    this.props.onSubmitColor(this.state.color);

    this.setState({
      color: '',
    });
  };

  render() {
    return <form>

      <div>
        <label htmlFor="color-input">New Color:</label>
        <input type="type" id="color-input" name="color"
          value={this.state.color} onChange={this.change} />
      </div>

      <button type="button" onClick={this.submitColor}>Submit Color</button>

    </form>
  }

}