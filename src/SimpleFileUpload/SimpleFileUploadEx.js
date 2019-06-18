import React, { Component } from 'react';

class SimpleFileUploadEx extends Component {
  constructor(props) {
    super(props);
    this.state = { file: [], imagePreviewUrl: [] }
  }
  handleChange(e) {
    let file = e.target.files
    let obj = Object.values(file).map(file => {
      let reader = new FileReader()
      reader.onloadend = () => {
        let url = reader.result;
        return url;
        // this.setState({
        //   file: [...this.state.file, file],
        //   imagePreviewUrl: [...this.state.imagePreviewUrl, reader.result]
        // })
      }
      
      reader.readAsDataURL(file)
     

      return file;
    })
    // console.log(obj);
    this.setState({
      file: [...this.state.file, ...obj],
      // imagePreviewUrl: [...this.state.imagePreviewUrl, reader.result]
    })
  }
  render() {
    return (
      <div className="previewComponent">
        <form>
          <input className="fileInput"
            onChange={(e) => this.handleChange(e)}
            multiple
            type="file" />
          <button className="submitButton"
            type="submit">Upload Images</button>
        </form>
        <div className="imgPreview">
          {this.state.imagePreviewUrl.map(image => {
            return <img src={image} alt='img' width='200' height='200' />
          })}
        </div>
      </div>
    )
  }
}

export default SimpleFileUploadEx;
