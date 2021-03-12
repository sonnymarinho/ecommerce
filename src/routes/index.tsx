import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/products" component={Products} />
  </Switch>
);

export default Routes;