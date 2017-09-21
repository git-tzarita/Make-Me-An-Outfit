import React, { Component } from 'react';

class OutfitEdit extends Component {



  render() {
    return (
      <div>
        <h2>Hello from Outfit Edit page</h2>
        <button onClick= {this.handleOnClick}> Edit Outfit</button>
        <div></div>
      </div>
    );
  }
}

export default OutfitEdit;

//<img src={this.state.apiData}/>
