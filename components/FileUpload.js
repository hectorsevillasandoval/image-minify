import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends Component{

  constructor(props){
    super(props);
    this.state = {
      files: {}
    }
  }


  render(){
    return(
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
    </div>
    );
  }
}

export default FileUpload;
