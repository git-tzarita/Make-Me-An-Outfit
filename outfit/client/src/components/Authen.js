import React, {Component} from 'react';
import axios from 'axios';


class Authen extends Component{
  constructor(props){
    super(props);

    this.state = {
      inputUserValue: '',
      inputPasswordValue: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogin(event){
    event.preventDefault();

    const { inputUserValue, inputPasswordValue } = this.state;

    axios.post('http://localhost:3001/login', { username: inputUserValue, password: inputPasswordValue })
    .then(res => {
      this.props.setUser(res.data.data.user.name);
      this.props.history.push('/'); // redirect to home page
    })
  }


  render(){
    return (
      <div id="form">
        <form onSubmit={this.handleLogin}>
          <input id="username" type="text" name="inputUserValue" value={this.state.inputUserValue} onChange={this.handleChange} placeholder="Enter user name" /><br />
          <input id="pass" type="password" name="inputPasswordValue" value={this.state.inputPasswordValue} onChange={this.handleChange} placeholder="Enter Password" /><br />
          <button id="auth" type="submit">Log In</button>
        </form>
        <button id="auth">Sign Up</button>
        <button id="auth">Log out</button>
        <h1>{this.state.user}</h1>
      </div>
     );
  }

}

export default Authen;
