import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';
import Warehouse from '../pages/Warehouse';
import Stock from '../pages/Stock';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Warehouse} />
    <Route path="/stocks/:warehouseId+" component={Stock} />
    <Route path="/*" component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
