import React, { Component } from 'react';
// import Slider from 'react-image-slider';
// import { Image } from 'cloudinary-react';
// import axios from 'axios';
// import Carousel from './Carousel';
import { Link } from 'react-router-dom';
 class OutfitNewHome extends Component {

   render() {
      return (
        <div className="randomizer">
      {this.props.user ? `Thanks for logging in ${this.props.user}` : '' }
          <nav className ="homeNav">
            <ul>
              <li><Link to="/OutfitMake">Get<br/> New<br/> Outfit</Link></li>
              <li><Link to="/OutfitUpload">Upload<br/> a New <br/>Image</Link></li>
            </ul>
          </nav>
        </div>
      );
    }
  }
export default OutfitNewHome;
