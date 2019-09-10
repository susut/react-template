import React, { Component} from "react";
import "./index.less"

class Home extends Component{
  render(){
    return(
      <div className="app">
        <h1> Hello, World!{process.env.NODE_ENV}</h1>
      </div>
    );
  }
}

export default Home;
