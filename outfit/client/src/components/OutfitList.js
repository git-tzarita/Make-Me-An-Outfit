import React, { Component } from 'react';
import Slider from 'react-image-slider';

class OutfitList extends Component {

  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      console.log(outfit);
      return (
          <img src={outfit.url} key={index} alt ="outfits"/>
        );
    });
    return images;
  }

  render() {
    return (
      <div>
        <div>  {/*slider 1*/}
          <Slider images={this.props.images} isInfinite delay={5000}>
            {this.renderOutfits()}
          </Slider>
          <button onClick= {this.handleOnClick}> Save Outfit</button>
        </div>

      </div>
    );
  }
}


export default OutfitList;
