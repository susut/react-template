import React, { Component} from "react";
import Layouts from './layouts';
import "./app.less"
import {Route} from "dva/router";
import Login from "./views/login";


class App extends Component{
  render(){
    return(
      <div className="app">
        <Route path='/login' component={Login} />
        <Route path='/layout' component={Layouts} />
      </div>
    );
  }
}

export default App;
