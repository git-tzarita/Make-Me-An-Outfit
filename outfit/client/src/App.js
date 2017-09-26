import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import { Image } from 'cloudinary-react';
import axios from 'axios';
import './App.css';
import Authen from './components/Authen';

import Header from './components/Header';
import Footer from './components/Footer';
// import OutfitHome from './components/OutfitHome';
import OutfitEdit from './components/OutfitEdit';
import OutfitList from './components/OutfitList';
import OutfitNewHome from './components/OutfitNewHome';
import OutfitMake from './components/OutfitMake';
import OutfitUpload from './components/OutfitUpload';
// import Slider from 'react-image-slider';
import './Carousel.css';
import Single from './components/single';



// import Carousel from './components/Carousel';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();

    this.state = {
      image: null,
      imgPreview: null,
      typeID: '',
      data: [] // DATA FROM SERVER

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);

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

  handleTypeChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

//on submit
  handleSubmit(e){
    console.log(this.state.typeID)
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
      console.log(res + ' response');
      // SET STATE WITH INFORMATION YOU RECEIVED
      this.setState({ data: res.data.data })
    })
    .catch(err => console.error(err));
  }

  // THIS FUNCTION WILL SEND URL FROM CLOUDINARY TO DATABASE
  sendToDB(url){
    axios({
      method: 'POST',
      url: 'http://localhost:3001/api/outfits/upload', // ENDPOINT WHERE THIS URL IS GOING
      data: {
        url: url,
        type_id: this.state.typeID
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err));
  }


  // handleLogin(username,password) {

  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:3001/login',
  //     params: {"username": username}
  //   })
  //   .then(res => {

  //     if(res.data.user === username && res.data.data===password)
  //      //if response from server confirms users exists ND password is correct
  //      this.setState({user:res.data.user})

  //     // it should send the user id
  //   })
    // .then(res => {
    //   // then another axios call to DB to pull all their clothes based on user id
    //   axios({
    //     method:'POST',
    //     url:'http://localhost:3001/login',
    //     data:{
    //       username:user
    //     }
    //     // make axios call here
    //   }).then(res => {
    //     console.log('username just inserted')
    //     // then set state with user ID, Name, and outfies
    //     this.setState(prevState => {
    //       return{
    //         user:prevState.user
    //       }

    //     })
    //   })
    // })
  //   .catch(err => {
  //     console.log('error posting');
  //   })
  // }

   handleClick(){
    console.log(this.state.data)
  }


  // handleClick(){
  //   this.setState({
  //     user:this.refs.username.value
  //   })
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <main>
          <Switch>
            <Route path='/OutfitEdit' component={(props) => <OutfitEdit {...props} data={this.state.data} />} />
            <Route exact path='/OutfitList' component={(props) => <OutfitList {...props} data={this.state.data} />} />
            <Route exact path='/OutfitList/:id' component={Single} />
            <Route path='/Auth' component={(props) => <Authen {...props} user={this.state.user} />}/>


            <Route path='/OutfitUpload' render={(props) =>
              (
                <OutfitUpload
                  sendToDB={this.sendToDB}
                  handleSubmit={this.handleSubmit}
                  handleChange = {this.handleChange}
                  imgPreview={this.state.imgPreview}
                  handleTypeChange={this.handleTypeChange}
                  typeID={this.state.typeID}
                  {...props}
                />
              )}
            />
            <Route path='/OutfitMake' component={(props) => <OutfitMake {...props} data={this.state.data} />} />
            <Route path='/' component={(props) => <OutfitNewHome {...props} data={this.state.data} />} />
            <Redirect to= '/' />

          </Switch>
        </main>
        <button onClick={this.handleClick}>state</button>
        <Footer />
    </div>
    );
  }
}

export default App;


