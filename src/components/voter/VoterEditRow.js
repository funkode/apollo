import React from 'react';

export class VoterEditRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: props.voter.firstName,
      lastName: props.voter.lastName,
      address: props.voter.address,
      city: props.voter.city,
      birthdate: props.voter.birthdate,
      email: props.voter.email,
      phone: props.voter.phone,
    };
  }

  change = evt => {
    this.setState({
      [ evt.target.name ]: evt.target.type === 'number'
        ? Number(evt.target.value)
        : evt.target.value,
    });
  };

  saveVoter = () => {
    this.props.onSaveVoter({
      ...this.state,
      id: this.props.voter.id,
    });
  };

  render() {
    return <tr>
      <td><input type="checkbox" checked={this.props.voterSelected}
        onChange={evt => this.props.onSelectVoter({ checked: evt.target.checked, voterId: this.props.voter.id })} /></td>
      <td>{this.props.voter.id}</td>
      <td>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="address" value={this.state.address} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="city" value={this.state.city} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="birthdate" value={this.state.birthdate} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="email" value={this.state.email} onChange={this.change} />
      </td>
      <td>
        <input type="text" name="phone" value={this.state.phone} onChange={this.change} />
      </td>
      <td>
        <button type="button" onClick={this.saveVoter}>Save</button>
        <button type="button" onClick={this.props.onCancelVoter}>Cancel</button>
      </td>
    </tr>;
  }

}
