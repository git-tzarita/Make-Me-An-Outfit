import React, { Component } from 'react';

class OutfitUpload extends Component {
  render() {
    return (
      <div>

        <form onSubmit= {this.props.handleSubmit.bind(this)}>
          <label className="file-upload-container" htmlFor="file-upload">
            <input onChange={this.props.handleChange} style= {{ display: 'none' }} id="file-upload" type="file" />
            <img src={this.props.imgPreview === null ? 'http://fillmurray.com/g/300/300' : this.props.imgPreview} alt ="Bill" id="img-preview" />
          </label><br/>

          <label>
            <p>Select a Top or Bottom:</p>
            <select name="Select Top or Bottom">
              <option value="Top">Top</option>
              <option value="Bottom">Bottom</option>
            </select>
          </label><br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default OutfitUpload;
