import React, { Component } from 'react';
import Slider from 'react-image-slider';

class OutfitHome extends Component {
  constructor(props){
    super(props);
  }

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
            <Slider
              images={this.props.images}
              isInfinite delay={1000}>
              {this.renderOutfits()} >
            <div className="randomImg">
              {this.renderOutfits()}
            </div>
            </Slider>
            <button onClick= {this.handleClick}>Stop</button>
            <button onClick= {this.onclickStop}>Save</button>
          </div>
        </div>
      </div>
      );
    }
  }

export default OutfitHome;
