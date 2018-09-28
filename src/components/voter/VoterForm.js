import React from 'react';
import PropTypes from 'prop-types';

export class VoterForm extends React.Component {

  static defaultProps = {
    buttonText: 'Register Voter',
  };

  static propTypes = {
    onSubmitVoter: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
  };
  
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return { 
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      birthdate: '',
      email: '',
      phone: '',
    };
  }

  change = evt => {
    this.setState({
      [ evt.target.name ]: evt.target.type === 'number'
        ? Number(evt.target.value)
        : evt.target.value
    });
  };

  submitVoter = evt => {
    evt.preventDefault();
    this.props.onSubmitVoter({ ...this.state });
    this.setState(this.getInitialState());
  };

  render() {
    return <form id="voterForm">
      <div>
        <label htmlFor="firstname-input">First Name:</label>
        <input type="text" id="firstname-input" name="firstName" value={this.state.firstName} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="lastName-input">Last Name:</label>
        <input type="text" id="lastName-input" name="lastName" value={this.state.lastName} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="address-input">Address:</label>
        <input type="text" id="address-input" name="address" value={this.state.address} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="city-input">City:</label>
        <input type="text" id="city-input" name="city" value={this.state.city} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="birthdate-input">Birthdate:</label>
        <input type="text" id="birthdate-input" name="birthdate" value={this.state.birthdate} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input type="text" id="email-input" name="email" value={this.state.email} onChange={this.change} />
      </div>
      <div>
        <label htmlFor="phone-input">Phone:</label>
        <input type="text" id="phone-input" name="phone" value={this.state.phone} onChange={this.change} />
      </div>
      <button type="button" className="button registerButton" onClick={this.submitVoter}>{this.props.buttonText}</button>
      
    </form>;
  }

}