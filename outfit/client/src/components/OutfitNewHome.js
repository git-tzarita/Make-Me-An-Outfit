import React, { Component } from 'react';
import Slider from 'react-image-slider';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';


 class OutfitNewHome extends Component {




   render() {
      return (
        <div className="randomizer">
        <nav>
          <ul>
            <li><Link to="/OutfitMake">Get New Outfit</Link></li>
            <li><Link to="/OutfitUpload">Upload a New Image</Link></li>
          </ul>
        </nav>
        </div>
      );
    }
  }


export default OutfitNewHome;
