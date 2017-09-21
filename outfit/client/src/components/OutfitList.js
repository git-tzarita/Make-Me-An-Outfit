import React, { Component } from 'react';


class OutfitList extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Outfit List page</h2>
        <button onClick= {this.handleOnClick}> Save Outfit</button>
      </div>
    );
  }
}


export default OutfitList;
