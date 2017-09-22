import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import './App.css';
import Authen from './Authen';

import OutfitEdit from './components/OutfitEdit';
import OutfitList from './components/OutfitList';
import OutfitUpload from './components/OutfitUpload';
import Header from './components/Header';
// import Carousel from './components/Carousel';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();

    this.state = {
      image: null,
      imgPreview: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          console.log(formData);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      data: formData
    })

      .then(res => {
        console.log(res);
        this.setState({ imgPreview: res.data.secure_url });

    //   axios({
    //     url: CLOUDINARY_URL,
    //     method: "POST",
    //     headers: {
    //       'Content-Type' : 'application/x-www-form-urlencoded'
    //     },
    //      data: //res.data.secure_url
    //    })
    //  })

      })
      .catch(err => {
        console.error(err);
      });
  }





  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h2>Make Me a Outfit</h2>
        </div>
        <main>
          <Switch>
            <Route path='/OutfitEdit' component={OutfitEdit} />
            <Route path='/OutfitList' component={OutfitList} />

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
            <Redirect to= '/' />
          </Switch>
        </main>
        <div className="RenderTest">

        </div>
        <Authen />
      </div>
    );
  }
}

export default App;


// <OutfitList / >
// <Carousel />
