import React, { Component } from 'react';
import Slider from 'react-image-slider';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';


 class OutfitMake extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

    this.onclickStop = this.onclickStop.bind(this);
    // this.onclickSave = thisonclickSave.bind(this)
    this.handleClick = this.handleClick.bind(this);

  }


onclickStop(){
    console.log("Hewll");
    return null;
  }

  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });
    return images;
  }




  handleClick(e){
    console.log(e.target.data);
    console.log(this.props.outfit);

    }

   render() {
      return (
        <div className="randomizer">
          <div className="randomizeImg">
            <div className="randomImg">
              <Slider images={this.props.images} isInfinite delay={1000}>
              {this.renderOutfits()}
              </Slider>
            </div>
            <div className="randomImg">
              {this.renderOutfits()}
            </div>
             <button onClick= {this.onclickStop}>Stop</button>
             <button onClick= {this.onclickSave}>Save</button>
          </div>
        </div>
      );
    }
  }


export default OutfitMake;
