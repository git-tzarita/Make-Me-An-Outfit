import axios from 'axios'
import React, {Component} from 'react';
class Single extends Component{
  constructor(props){
    super(props);
    this.state = { outfit: [], apiDataLoaded: false }
  }

componentDidMount() {
  const singleId = this.props.match.params.id
  axios({
      method: 'GET',
      url: `http://localhost:3001/api/outfits/${singleId}`
    })
    .then(res => {
      console.log(res);
      // SET STATE WITH INFORMATION YOU RECEIVED
      this.setState({ outfit: res.data.data.outfit, apiDataLoaded: true })
    })
    .catch(err => console.error(err));
}

renderOutfit(){
  console.log(this.state.outfit)
  if(this.state.apiDataLoaded === true){
  let outfit = this.state.outfit.map(outfit => {
    return (
      <div>
        <img src={outfit["0"].url} alt="top" />
        <img src={outfit["1"].url} alt="bottom" />
      </div>
    );
  })

  return outfit;
}
}

render() {
  return(
    <div>{this.renderOutfit()}</div>
    )
}

}

export default Single;
