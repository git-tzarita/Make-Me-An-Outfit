import React, { Component } from 'react';
import Slider from 'react-image-slider';
// import { Image } from 'cloudinary-react';
// import axios from 'axios';
// import Carousel from './Carousel';
// import { Link } from 'react-router-dom';


 class OutfitHome extends Component {
  constructor(props){
    super(props);
}
    // this.handleClick = this.handleClick.bind(this);
    // this.onclickStop = this.onclickStop.bind(this);


handleClick(){
    console.log(this.state.data);
  }


onclickStop(){
    this.setState({
    });

  }


// mapping the database
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

            <div>
              <Slider images={this.props.images} isInfinite delay={1000}>
              {this.renderOutfits()}
              </Slider>
            </div>

            <div className="randomImg">
              {this.renderOutfits()}
            </div>

             <button onClick= {this.handleClick}>Stop</button>
             <button onClick= {this.onclickStop}>Save</button>
          </div>
        </div>
      );
    }
  }


export default OutfitHome;
