import React from 'react';

import { ProductsProvider } from './useProducts';
import { CartProvider } from './useCart';

const AppProviders: React.FC = ({ children }) => (
  <ProductsProvider>
    <CartProvider>{children}</CartProvider>
  </ProductsProvider>
);

export default AppProviders;
