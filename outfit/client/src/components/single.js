import axios from 'axios'
import React, {Component} from 'react';
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
      url: `http://localhost:3001/api/outfits/${this.state.outfitId}`
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

// renderOutfit(){
//   console.log(this.state.outfit)
//   if(this.state.apiDataLoaded === true){
//   let outfit = this.state.outfit.map(outfit => {
//     return (
//       <div>
//         <img src={outfit.url} alt="fulloutfit" />
//       </div>
//     );
//   })

//   return outfit;
// }
// }

render() {
  console.log(this.state.outfit)
  return(
    <div>
    <p>hello</p>
    </div>
    )
}

}

export default Single;
