import React from 'react';
import Home from '../views/home';
import Login from '../views/login';
import { routerRedux, Route, Switch } from 'dva/router';

const { ConnectedRouter } = routerRedux;

export default function Router({history}) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/login' component={Login}/>
        <Route path="/home" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}
