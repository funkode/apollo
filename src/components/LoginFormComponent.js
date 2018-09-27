import React from 'react';
export class LoginFormComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      firstName:"",
      lastName:"",
      email:"",
    }
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.type==='number'
        ? Number(e.target.value)
        : e.target.value
    });
  };
  login=()=>{
    this.props.loginForm({
      id:this.state.id,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email
    });
    console.log("LOGGING IN");
    this.setState({
      id:0,
      firstName:"",
      lastName:"",
      email:"",
    })
  }
  render(){
    return <React.Fragment>

    <form>
      <div>
        <label htmlFor = "id">ID</label>
        <input type='number' id='id' value={this.state.id} onChange = {this.change} name="id"/>
      </div>
      <div>
        <label htmlFor = "firstName">First Name</label>
        <input type='text' id='firstName' value={this.state.firstName} onChange = {this.change} name="firstName"/>
      </div>
      <div>
        <label htmlFor = "lastName">Last Name</label>
        <input type='text' id='lastName' value={this.state.lastName} onChange = {this.change} name="lastName"/>
      </div>
      <div>
        <label htmlFor = "email">Email</label>
        <input type='text' id='email' value={this.state.email} onChange = {this.change} name="email"/>
      </div>
      <button type='button' onClick={this.login}>Login</button>
    </form>
    </React.Fragment>
  }
}
