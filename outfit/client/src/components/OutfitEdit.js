import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import Slider from 'react-image-slider';

class OutfitEdit extends Component {

renderOutfitsTops(){
  let images = this.props.data.map((outfit, index) => {
    console.log(outfit.type_id===1)
    //if (outfit.type_id === 1 && outfit.outfit_id ===2) {
    if (outfit.type_id === 1) {
    return (
        <img src={outfit.url} key={index} />
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
        <img src={outfit.url} key={index} />
    )}

      ;
  });
  return images;
}

  render() {
    return (
      <div>
        <h2>Edit</h2>
        <div id="editTop">
          <Slider images={this.props.images} isInfinite delay={5000}>
            {this.renderOutfitsTops()}
          </Slider>
        </div>
        <div id="editBottom">
          <Slider images={this.props.images} isInfinite delay={5000}>
            {this.renderOutfitsBottoms()}
          </Slider>
        </div>
        <button onClick= {this.handleOnClick}> Edit Outfit</button>
        <div></div>
      </div>
    );
  }
}

export default OutfitEdit;
