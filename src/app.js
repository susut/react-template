import React, { Component} from "react";
import Login from './views/login';
import { Route } from 'dva/router';
import "./app.less"

class App extends Component{
  render(){
    return(
      <div className="app">
        <h1> Hello, World!{process.env.NODE_ENV}</h1>

        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}

export default App;