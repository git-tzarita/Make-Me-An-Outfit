import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleList extends Component {

render() {
  return(
    <div>
    <img src={this.props.topurl} />
    <img src={this.props.bottomurl} />
    <Link to={`/OutfitList/${this.props.id}`}>View Outfit</Link>
    </div>
    )
}
}

export default SingleList;
