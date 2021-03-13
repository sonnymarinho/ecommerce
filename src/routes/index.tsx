import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/checkout" component={Checkout} />
  </Switch>
);

export default Routes;
