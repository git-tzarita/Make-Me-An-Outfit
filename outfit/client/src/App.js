import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';

import Authen from './components/Authen';
import Header from './components/Header';
import Footer from './components/Footer';
import OutfitEdit from './components/OutfitEdit';
import OutfitList from './components/OutfitList';
import OutfitNewHome from './components/OutfitNewHome';
import OutfitMake from './components/OutfitMake';
import OutfitUpload from './components/OutfitUpload';
import Single from './components/single';

import './App.css';
import './Carousel.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image: null,
      imgPreview: null,
      typeID: '',
      data: [], // DATA FROM SERVER
      user: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setUser = this.setUser.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  setUser(username) {
    this.setState({ user: username })
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
    //console.log(this.state.typeID)
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
      url: '/api/outfits', // ENDPOINT TO GET INFORMATION
    })
    .then(res => {
      // SET STATE WITH INFORMATION YOU RECEIVED
      this.setState({ data: res.data.data })
    })
    .catch(err => console.error(err));
  }

  // THIS FUNCTION WILL SEND URL FROM CLOUDINARY TO DATABASE
  sendToDB(url){
    axios({
      method: 'POST',
      url: '/api/outfits/upload', // ENDPOINT WHERE THIS URL IS GOING
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
            <Route path='/Auth' component={(props) => <Authen {...props} setUser={this.setUser} />}/>
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
            <Route path='/' component={(props) => <OutfitNewHome {...props} data={this.state.data} user={this.state.user}/>} />
            <Redirect to= '/' />
          </Switch>
        </main>
        <Footer />
    </div>
    );
  }
}

export default App;
