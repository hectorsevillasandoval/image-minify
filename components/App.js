import React, {Component} from 'react';
import axios from 'axios';


class App extends Component{

  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.compressImage();
  }

  /* Funtion which send a request to tiny png */

  compressImage(){
    axios({
      url: "/shrink",
      baseURL: "https://api.tinify.com/",
      method: "post",
      headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Basic YXBpOjZKQWNualI5ek40Ql9Qb1hfc0FreXlBRmxleG12NGpR"
                },
      data: {
            	"source": {
                "url": "http://www.whitesharkmedia.com/wp-content/themes/WhitesSharkMediaV2/new-homepage/images/bg-banner.jpg"
            	}
            }

    })
    .then(function(response){
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return(
      <div className="mainContainer"></div>
    );
  }

}

export default App;
