import React, { Component } from 'react';

class OutfitUpload extends Component {
  render() {
    return (
      <div>
        <form onSubmit= {this.props.handleSubmit.bind(this)}>
          <label className="file-upload-container" htmlFor="file-upload">
            <input onChange={this.props.handleChange} style= {{ display: 'none' }} id="file-upload" type="file" />
            <img src={this.props.imgPreview === null ? 'http://res.cloudinary.com/ga-mao/image/upload/v1506294088/cutout1_k4aec5.jpg' : this.props.imgPreview} alt ="Bill" id="img-preview" />
          </label><br/>


          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default OutfitUpload;
