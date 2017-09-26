import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleList extends Component {

  render() {
    return(
      <div id="ListWrapper">
        <div id="outfitItem">
          <div id="buttonWrapper">
            <button>
              <Link to={`/OutfitList/${this.props.id}`}>View Outfit</Link>
            </button>
            <button>
              <Link to={`/OutfitList/${this.props.id}`}>Delete Outfit</Link>
            </button>
          </div>
          <img src={this.props.topurl} />
          <img src={this.props.bottomurl} />
        </div>
      </div>
    )
  };
};

export default SingleList;
