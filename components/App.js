import React, {Component} from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      files: ["no data"]
    };

    this.compressImage = this.compressImage.bind(this);
  }


  componentDidMount(){
    //this.compressImage();
  }

  /* Funtion which send a request to tiny png */

  compressImage(val){
    this.setState({
      files: val
    }, this.sendRequestToCompress );
  }

  sendRequestToCompress(){

    
    const url = "https://api.tinify.com/shrink",
            config = {
              headers: { 'Content-Type': this.state.files[0].type, "Authorization": "Basic YXBpOjZKQWNualI5ek40Ql9Qb1hfc0FreXlBRmxleG12NGpR" }
          };

    axios.post(url, this.state.files[0], config)
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
      console.log("Fucking Error: " + error);
    });

  }

  render(){
    return(
      <div className="mainContainer">
        <FileUpload onChange={this.compressImage} />
      </div>
    );
  }

}

export default App;
