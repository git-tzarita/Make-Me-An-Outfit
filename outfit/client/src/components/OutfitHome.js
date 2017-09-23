import React, { Component } from 'react';
import Slider from 'react-image-slider';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';


 class OutfitHome extends Component {
  constructor(){
    super();
    this.state = {

    }
    // this.onclickShuffle = this.this.onclickShuffle.bind(this)
    // this.onclickStop = this.this.onclickStop.bind(this)
    // this.onclickSave = this.this.onclickSave.bind(this)
    // this.onclickGetNew = this.onclickGetNew.bind(this)

  }



  onclickShuffle(event){
  //   console.log('handling shuffle')
  //     $slotImage.each( function(i,d) {
  //     let random = Math.floor(Math.random() * slotElement.length)
  //     $(d).attr("src", slotElement[random]);
  //   })
  // }


  }


  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });

    return images;
  }
  onclickStop(){

  }

  onclickSave(){

  }

  onclickGetNew(){

  }


 render() {
    return (
      <div className="randomizer">
      <nav>
        <ul>
          <li><Link to="/OutfitList">Get New Outfit</Link></li>
          <li><Link to="/OutfitUpload">Upload a New Image</Link></li>
        </ul>
      </nav>
      <Slider images={this.props.images} isInfinite delay={5000}>
            {this.renderOutfits()}
          </Slider>
        <h2>Home</h2>
        <div className="randomizeImg">
          <div className="randomImg"></div>
           <button onClick= {this.onclickShuffle}>Shuffle</button>
           <button onClick= {this.onclickStop}>Stop</button>
           <button onClick= {this.onclickSave}>Save</button>
        </div>
      </div>
    );
  }
}


export default OutfitHome;
