import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';

class OutfitEdit extends Component {





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
