import React, {Component} from 'react';

class Authen extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handlelogin = this.handlelogin.bind(this);
  }

  handleLogin(event){
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    //this.props.handleLogin(user,pswd)

  }

render(){
  return (
    <div>
      <input id="username" ref="username" type="username" placeholder="Enter user name" /><br />
      <input id="pass" ref="password" type="password" placeholder="Enter Password" /><br />

      <button onClick={this.handlelogin}>Log In</button>
      <button>Sign Up</button>
      <button>Log out</button>

    </div>

   );
}

}

export default Authen;
