import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OutfitNewHome extends Component {

  render() {
    return (
      <div className="randomizer">
      {this.props.user ? `Thanks for logging in ${this.props.user}` : ''}
        <nav className ="homeNav">
          <ul>
            <li><Link to="/OutfitMake">Get<br/> New<br/> Outfit</Link></li>
            <li><Link to="/OutfitUpload">Upload<br/> a New <br/>Image</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default OutfitNewHome;
