import React, { Component } from 'react';
import SingleList from './SingleList';
import Slider from 'react-image-slider';

class OutfitList extends Component {

  renderOutfits() {
    let images = this.props.data.map((outfit, index, array) => {
      if ((array[index + 1] !== undefined) && (outfit.outfit_id===array[index + 1].outfit_id)) {
        //console.log(outfit.url, array[index + 1].url)
        return (
            <div id="listOutfits" key={index}>
              <SingleList
              topurl={outfit.url}
              key={index}
              id={outfit.outfit_id}
              bottomurl={array[index+1].url} />
            </div>
        )};
    });
    return images;
  }

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

export default OutfitList;
