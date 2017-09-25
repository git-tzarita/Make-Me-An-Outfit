import React, { Component } from 'react';
import Slider from 'react-image-slider';
// import { Image } from 'cloudinary-react';
// import axios from 'axios';
// import Carousel from './Carousel';
// import { Link } from 'react-router-dom';


 class OutfitMake extends Component {
  constructor(props){
    super(props);
    // this.state = {

    // }

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
    console.log("test");
    // this.setState({
    //   clearAnimate(),
    // });

    interval: false
    console.log("this is Slider", Slider)
  }

  // handleClick(e){
  //   console.log(e.target.data);
  //   console.log(this.state.data);

  //   }



   render() {
      return (
        <div className="randomizer">
          <div className="randomizeImg">
            <div className="randomImg">
              <Slider images={this.props.images} isInfinite delay={5000} visibleItems={1}>
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
