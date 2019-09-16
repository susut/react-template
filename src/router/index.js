import React from 'react';
import App from '../app';
import { routerRedux, Route, Switch } from 'dva/router';

const { ConnectedRouter } = routerRedux;

export default function Router({history}) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  );
}
