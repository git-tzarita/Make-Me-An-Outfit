import React, { Component } from 'react';
import Slider from 'react-image-slider';
// import SingleList from './components/SingleList';
import Single from './single';

class OutfitList extends Component {

//TRY 1

//   renderOutfits(){
//     let images = this.props.data.map((outfit, index) => {
//       console.log(outfit);
//       return (
//         <div>
//           <img src={outfit.url} key={index} />
//         </div>
//         );
//     });
//     return images;
//   }

//   render() {
//     return (
//       <div>
//         <div>  {/*slider 1*/}
//           <Slider images={this.props.images} isInfinite delay={5000}>
//             {this.renderOutfits()}
//           </Slider>
//           <button onClick= {this.handleOnClick}> Save Outfit</button>
//         </div>

//       </div>
//     );
//   }
// }

//TRY 2

renderOutfitsTops(){
  let images = this.props.data.map((outfit, index) => {
    console.log(outfit.type_id===1)
    //if (outfit.type_id === 1 && outfit.outfit_id ===2) {
    if (outfit.type_id === 1) {
    return (
        <div id="listTop">
        <img src={outfit.url} key={index} />
        </div>
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
      <div id="listBottom">
        <img src={outfit.url} key={index} />
      </div>
    )}
      ;
  });
  return images;
}

  render() {
    return (
      <div>
        <div id="oufitListWrapper">
          <div id="outfitGrouped">
            <button onClick= {this.handleOnClick}> Edit Outfit</button>
            <div id="listTop">
                {this.renderOutfitsTops()}
            </div>
            <div id="listBottom">
                {this.renderOutfitsBottoms()}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}

//TRY 3

 // render() {
 //    console.log('Outfit rendering', this.props);
 //    return (
 //      <div id = "outfitListWrapper">
 //      { this.props.data.map((outfit, index) => {
 //         return (
 //          <single
 //          data={outfit}
 //          key={index} />
 //          )
 //       })}
 //      </div>
 //    )
 //  }


// }
export default OutfitList;
