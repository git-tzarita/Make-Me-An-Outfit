import React, { Component } from 'react';

class OutfitUpload extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Outfit Upload page</h2>
      <form onSubmit= {this.props.handleSubmit.bind(this)}>
      <label className="file-upload-container" htmlFor="file-upload">
        <input onChange={this.props.handleChange} style= {{ display: 'none' }} id="file-upload" type="file" />
        <p><img src={this.props.imgPreview === null ? 'http://fillmurray.com/g/300/300' : this.props.imgPreview} alt ="Bill" id="img-preview" /></p>
      </label><br/>
      <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default OutfitUpload;
