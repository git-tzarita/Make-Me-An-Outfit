import React from 'react';
import Slider from 'react-image-slider';

class slotElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

    this.onclickStart = this.onclickStart.bind(this);
    this.onclickStop = this.onclickStop.bind(this);



  renderOutfits(){
    let images = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });
    return images;
  }

  function changeImage() {
     $slotImage.each( function(i,d) {
      // console.log("this is i & d", i, d)
      let random = Math.floor(Math.random() * images.length)
      $(d).attr("src", slotElement[random]);
    })
  }


}

  onclickStart(){
    console.log("start");

  }

  onclickStop(){
    console.log("Hewll");

  }

  //function looping and randomizing the images

//click event activates the array of images
$els.startBtn.addEventListener("click", startGame);

//function start looping with a set interval and clear interval
function startGame(){
  if (!gamebButton) {
    ($textMsg).html('Test Your Luck').css({"color": "black"});
  }
  let sI = setInterval(changeImage, 100);
  $els.resetBtn.addEventListener("click", function(){
   clearInterval(sI)
  });
  gamebButton = false;
};



render() {
      return (
        <div className="randomizer">
            <div className="randomImg">
              {this.renderOutfits()}
             <button onClick= {this.onclickStop}>Stop</button>
             <button onClick= {this.onclickSave}>Save</button>
          </div>
        </div>
      );
    }
  }


