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
  }




  renderOutfitsTops(){
    let images = this.props.data.map((outfit, index) => {
      console.log(outfit.type_id===1)

      //if (outfit.type_id === 1 && outfit.outfit_id ===2) {

      if (outfit.type_id === 1) {
      return (
          <img src={outfit.url} key={index} alt ="outfits"/>
      )}

        ;
    });
    return images;
  }

  renderOutfitsBottoms(){
    let images = this.props.data.map((outfit, index) => {
      console.log(outfit.type_id === 2)

      //if (outfit.type_id === 2 && outfit.outfit_id === 2) {

      if (outfit.type_id === 2) {
      return (
          <img src={outfit.url} key={index} alt ="outfits" />
      )}
        ;
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
              <Slider ref="slider" id='slider' images={this.props.images} isInfinite delay={this.state.clicked ? 0 : 300 } visibleItems={1}>
              {this.renderOutfitsTops()}
              </Slider>
            </div>
            <div className="randomImg">
              <Slider ref="slider" id='slider' images={this.props.images} isInfinite delay={this.state.clicked ? 0 : 300 } visibleItems={1}>
              {this.renderOutfitsBottoms()}
              </Slider>
            </div>
             <button onClick={this.onclickStop}>Stop</button>
             <button onClick= {this.onclickSave}>Save</button>
          </div>
        </div>
      );
    }
  }


export default OutfitMake;
