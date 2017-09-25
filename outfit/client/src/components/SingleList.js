import React, { Component } from 'react';
import axios from 'axios'

renderOutfit(){
  console.log('Single Item rendering')
    return (
      <div>
        {this.props.data.data}
      </div>
    );
  })

export default SingleList;
