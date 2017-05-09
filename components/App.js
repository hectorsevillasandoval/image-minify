import React, {Component} from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import TableComponent from './tableComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


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

  compressImage(files){

    this.setState({
      files: files
    }, this.sendRequestToCompress );
  }

  sendRequestToCompress(){


    /* const url = "https://api.tinify.com/shrink",
            config = {
              headers: { 'Content-Type': this.state.files[0].type},
              auth: {
                username: "api",
                password: "6JAcnjR9zN4B_PoX_sAkyyAFlexmv4jQ"

              }
          };

    axios.post(url, this.state.files[0], config)
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
      console.log("Fucking Error: " + error);
    });
*/
console.log(this.state.files );

  }

  render(){
    return(
      <div className="mainContainer">


        <MuiThemeProvider>
          <div>
            <form>
            <FileUpload onDrop={this.compressImage} />
            </form>
            <TableComponent files={this.state.files} />


          </div>
        </MuiThemeProvider>




      </div>
    );
  }

}

export default App;
