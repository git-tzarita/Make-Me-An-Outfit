import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;


class Carousel extends Component {
  render() {
        return (
            <Carousel axis="horizontal|vertical" showThumbs={true|false} showArrows={true|false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} dynamicHeight emulateTouch>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}



// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


// export default Carousel;
