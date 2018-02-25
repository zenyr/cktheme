import React from 'react';
import { Switch, Route } from 'react-router';
import { ViewCode } from './Code';
import { Error } from './Error';
const Routes = () => (
  <Switch>
    <Route path="/" exact={true} />
    <Route path="/code" component={ViewCode} />
    <Route path="/info" />
    <Route path="/edit" />
    <Route component={Error} />
  </Switch>
);
export default Routes;

/**
 * Code (Import/Export)
 * Info
 * Edit
 */
