import React, { Component } from 'react';
import Slider from 'react-image-slider';
// import SingleList from './components/SingleList';
import Single from './single';
import SingleList from './SingleList';
import axios from 'axios'

class OutfitList extends Component {


//TRY 1 - this renders all images, not sorted

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

//TRY 2 - this renders images but button does not take to a single view

renderOutfits(){
  let images = this.props.data.map((outfit, index, array) => {
    //console.log(outfit.outfit_id===array[index + 1].outfit_id)
    //if (outfit.type_id === 1 && outfit.outfit_id ===2) {
    if ((array[index + 1] !== undefined) && (outfit.outfit_id===array[index + 1].outfit_id)) {
      console.log(outfit.url, array[index + 1].url)
    return (
        <div id="listOutfits">
        <SingleList
        topurl={outfit.url}
        key={index}
        id={outfit.outfit_id}
        bottomurl={array[index+1].url} />
        </div>
    )}
      ;
  });
  console.log(images + ' images');
  return images;
}

// renderOutfitsBottoms(){
//   let images = this.props.data.map((outfit, index) => {
//     console.log(outfit.type_id === 2)
//     //if (outfit.type_id === 2 && outfit.outfit_id === 2) {
//     if (outfit.type_id === 2) {
//     return (
//       <div id="listBottom">
//         <img src={outfit.url} key={index} />
//       </div>
//     )}
//       ;
//   });
//   return images;
// }


  render() {
    return (
      <div>
        <div id="oufitListWrapper">
          <div id="outfitGrouped">
            <div id="listTop">
                {this.renderOutfits()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//TRY 3 - this renders nothing but is linked to single page which does render, so need to be able to connect pages

 // render() {
 //    console.log('Outfit rendering', this.props);
 //    return (
 //      <div id = "outfitListWrapper">
 //      { this.props.data.map((outfit, index) => {
 //         return (
 //          <Single
 //          data={outfit}
 //          key={index}
 //           />
 //          )
 //       })}
 //      <button onClick= {this.handleOnClick}> Edit Outfit</button>
 //      </div>
 //    )

 //TRY 4 - working with Jon on this

 //    console.log('Outfit rendering', this.props);
 //    return (
 //      <div>
 //      <Single data={this.props.data} />
 //      </div>)
 //  }

 //TRY 5


//}
export default OutfitList;
