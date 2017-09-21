import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';

class OutfitEdit extends Component {
  constructor(){
    super();
    this.state = {
      apiData: [],
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }


    componentDidMount() {
      console.log('APP did mount');
    }

     handleOnClick(){
      console.log('hello')

        axios("https://api.cloudinary.com/v1_1/ga-mao/resources/image")

          .then(res => {
            this.setState({
              apiData: res.data.data.url,
            })
            console.log(res.data)
          })
      }




  render() {
    return (
      <div>
        <h2>Hello from Outfit Edit page</h2>
        <button onClick= {this.handleOnClick}> Edit Outfit</button>
        <div></div>
      </div>
    );
  }
}

export default OutfitEdit;

