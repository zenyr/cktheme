import React from 'react';
import { Switch, Route } from 'react-router';
import { Error } from './Error';
const Routes = () => (
  <Switch>
    <Route path="/info" />
    <Route component={Error} />
  </Switch>
);
export default Routes;
