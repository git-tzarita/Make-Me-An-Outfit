import React, { Component } from 'react';

class OutfitList extends Component {

  renderOutfits(){
    let outfits = this.props.data.map((outfit, index) => {
      return (
          <img src={outfit.url} key={index} />
        );
    });

    return outfits;
  }

  render() {
    return (
      <div>
        <h2>Hello from Outfit List page</h2>
        {this.renderOutfits()}
        <button onClick= {this.handleOnClick}> Save Outfit</button>
      </div>
    );
  }
}


export default OutfitList;
