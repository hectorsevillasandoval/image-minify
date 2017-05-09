import React, {Component} from 'react';
import Dropzone from 'react-dropzone';



class FileUpload extends Component{

  constructor(props){
    super(props);

    this.state = {
      files: []
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles){

    this.setState({ files: acceptedFiles },
      function(){
        this.props.onDrop(this.state.files);
      });

  }


  render(){
    return(
      <div>
        <Dropzone onDrop={this.onDrop} >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>




        <h4>Files: {this.state.files.length}</h4>

        {this.state.files.length > 0 ? <div>
            <h2>Uploading {this.state.files.length} files...</h2>
            <div>{this.state.files.map((file) => <img key={file.name}  src={file.preview} /> )}</div>
        </div> : null}
      </div>
    );
  }
}

export default FileUpload;
