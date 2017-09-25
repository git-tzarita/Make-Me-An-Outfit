import React, {Component} from 'react';


// import axios from 'axios';


class Authen extends Component{
  constructor(props){
    super(props);

    this.state = {
      user:''
    };
    // this.handlelogin = this.handlelogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }


  handleLogin(user){
    const username = this.refs.username.value;
    // const password = this.refs.password.value;
    //this.props.handleLogin(username.password);

    this.setState({
      user:username,
    })
    console.log(this.props)
    console.log(this.props.user)
  }

  // handleLogin(username,password) {
  //   const usersname = this.refs.usersname.value;
  //   console.log(username,password);
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:3001/login'
  //   })
  //   .then(res => {
  //     if(res.data.data === username && res.data.data===password)
  //      //if response from server confirms users exists AND password is correct
  //      this.setState({db:res.data.data})
  //     // it should send the user id
  //   })
  //   .then(res => {
  //     // then another axios call to DB to pull all their clothes based on user id
  //     axios({
  //       method:'POST',
  //       url:'http://localhost:3001/login'
  //       // make axios call here
  //     }).then(res => {
  //       // then set state with user ID, Name, and outfies
  //       this.setState()
  //     })
  //   })
  // }



render(){
  return (
    <div>
      <input id="username" ref="username" type="username" placeholder="Enter user name" /><br />
      <input id="pass" ref="password" type="password" placeholder="Enter Password" /><br />

      <button onClick={this.handleLogin}>Log In</button>
      <button>Sign Up</button>
      <button>Log out</button>
      <h1>{this.state.user}</h1>



    </div>

   );
}

}

export default Authen;
