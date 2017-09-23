import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import './App.css';
import Authen from './components/Authen';
import './Carousel.css';

import Header from './components/Header';
import OutfitHome from './components/OutfitHome';
import OutfitEdit from './components/OutfitEdit';
import OutfitList from './components/OutfitList';
import OutfitUpload from './components/OutfitUpload';
import Single from './components/single';

import Carousel from './components/Carousel';
import Slider from 'react-image-slider';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();

    this.state = {
      image: null,
      imgPreview: null,
      data: [] // DATA FROM SERVER
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /* triggered before rendering, but will be overrritten by "didMount" */
  componentWillMount() {
    console.log('APP will mount');
  }

  /*
  is rendered last right before rendering
  hence we should do last state manipulations here
  */
  componentDidMount() {
    console.log('APP did mount');
    this.getDataFromDB();

  }


  handleChange(e){
    if (e.currentTarget.files.length === 1) {
      const fReader = new FileReader();
      fReader.addEventListener(
        'load',
        () => {
          // rendering file preview
          this.setState({  image: fReader.result });
        },
        false
      );

      if (e.currentTarget.files['0']) {
        // reading file
        fReader.readAsDataURL(e.currentTarget.files['0']);
      }
      return;
    }
  }

//on submit
  handleSubmit(e){
    e.preventDefault();

    var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ga-mao/image/upload';
    var CLOUDINARY_UPLOAD_PRESET = 'jd8p5ppp';

    var file = this.state.image;
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then(res => {
      // THIS FUNCTION WILL SUBMIT URL TO DATABASE
      this.sendToDB(res.data.secure_url);
    })
    .then(res => {
      this.setState({ imgPreview: res.data.secure_url });
    })
    .catch(err => {
      console.error(err);
    });
  }

  // THIS FUNCTION IS RESPONSIBLE FOR GETTING INFORMATION FROM THE DATABASE
  getDataFromDB(){
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/outfits', // ENDPOINT TO GET INFORMATION
    })
    .then(res => {
      console.log(res);
      // SET STATE WITH INFORMATION YOU RECEIVED
      this.setState({ data: res.data.data })
    })
    .catch(err => console.error(err));
  }

  // THIS FUNCTION WILL SEND URL FROM CLOUDINARY TO DATABASE
  sendToDB(url){
    axios({
      method: 'POST',
      url: 'CLOUDINARY_URL', // ENDPOINT WHERE THIS URL IS GOING
      data: {
        url: url
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err));
  }

  handleLogin(user,pswd) {
    console.log(user,pswd);
    axios({
      method: 'GET',
      url: 'http://localhost:3001/login'
    })
    .then(res => {
      if(res.data.data === user && res.data.data===pswd)
       //if response from server confirms users exists AND password is correct
       this.setState({db:res.data.data})
      // it should send the user id
    })
    .then(res => {
      // then another axios call to DB to pull all their clothes based on user id
      axios({
        method:'POST',
        url:'http://localhost:3001/login'
        // make axios call here
      }).then(res => {
        // then set state with user ID, Name, and outfies
        this.setState()
      })
    })
  }
   handleClick(){
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="App">
<button onClick={this.handleClick}>state</button>
        <div className="App-header">
          <h2>Make Me a Outfit</h2>
          <Header />
        </div>
        <main>
          <Switch>
            <Route path='/OutfitEdit' component={(props) => <OutfitEdit {...props} data={this.state.data} />} />
            <Route path='/OutfitList' component={(props) => <OutfitList {...props} data={this.state.data} />} />
            <Route path='/Auth' component={Authen} />
            <Route path='/single/:id' component={Single} />
            <Route path='/OutfitUpload' render={(props) =>
              (
                <OutfitUpload
                  handleSubmit={this.handleSubmit}
                  handleChange = {this.handleChange}
                  imgPreview={this.state.imgPreview}
                  {...props}
                />
              )}
            />

            <Route path='/' component={(props) => <OutfitHome {...props} data={this.state.data} />} />
            <Redirect to= '/' />
          </Switch>
        </main>

    </div>
    );
  }
}

export default App;


// <OutfitList / >
// <Carousel />
