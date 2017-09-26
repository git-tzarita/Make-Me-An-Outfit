import axios from 'axios'
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Single extends Component{
  constructor(props){
    super(props);
    this.state = {
      outfitId: this.props.match.params.id,
      apiDataLoaded: false
    }
  }

componentDidMount() {
  console.log('these are the props --->', this.props)
  axios({
      method: 'GET',
      url: `/api/outfits/${this.state.outfitId}`
    })
    .then(res => {
      console.log(res);
      // SET STATE WITH INFORMATION YOU RECEIVED
      this.setState({
        outfit: res.data.data.outfit,
        apiDataLoaded: true
      })
    })
    .catch(err => console.error(err));
}

renderOutfit(){
  console.log(this.state.outfit + ' state: outf')
  if(this.state.apiDataLoaded === true){
  let outfit = this.state.outfit.map((outfit, index) => {
    return (
      <div>
        <img src={outfit.url} alt="fulloutfit" key={index} />
      </div>
    );
  })

  return outfit;
}
}

render() {
  console.log(this.state.outfit)
  return(
    <div>
    <div>{this.renderOutfit()}</div>
    <Link to="/OutfitEdit">Edit Outfit</Link>
    </div>




    )
}

}

export default Single;
