import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';
import Warehouse from '../pages/Warehouse';
import Stock from '../pages/Stock';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Warehouse} />
    <Route path="/stocks/:warehouseId+" component={Stock} />
    <Route path="/products" exact component={Product} />
    <Route path="/*" component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
