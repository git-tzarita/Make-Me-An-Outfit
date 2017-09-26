import React, { Component } from 'react';
import Slider from 'react-image-slider';

class CarouselHomeTop extends Component {

  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });

    return images;
  }

  render() {
    return (
      <div>
        <div>
          <Slider images={this.props.images} isInfinite delay={5000}>
            {this.renderOutfits()}
          </Slider>

        </div>
        <h2>Hello from Outfit List page</h2>
        {this.renderOutfits()}
        <button onClick= {this.handleOnClick}> Save Outfit</button>
      </div>
    );
  }
}


export default CarouselHomeTop;
