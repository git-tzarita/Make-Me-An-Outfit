import React, { Component } from 'react';
import Slider from 'react-image-slider';
// import { Image } from 'cloudinary-react';
// import axios from 'axios';
// import Carousel from './Carousel';
// import { Link } from 'react-router-dom';


 class OutfitMake extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }

    this.onclickStop = this.onclickStop.bind(this);
    // this.onclickSave = thisonclickSave.bind(this)
    // this.handleClick = this.handleClick.bind(this);

  }




  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} alt ="outfits"/>
        );
    });
    return images;
  }


  onclickStop(e){
    this.setState({ clicked: true })
  }





   render() {
      return (
        <div className="randomizer">
          <div className="randomizeImg">
            <div className="randomImg">
              <Slider ref="slider" id='slider' images={this.props.images} isInfinite delay={this.state.clicked ? 0 : 1000 } visibleItems={1}>
              {this.renderOutfits()}
              </Slider>
            </div>

             <button onClick={this.onclickStop}>PassStop</button>
             <button onClick= {this.onclickSave}>Save</button>
             <button onClick={this.handleClick}>state</button>
          </div>
        </div>
      );
    }
  }


export default OutfitMake;
