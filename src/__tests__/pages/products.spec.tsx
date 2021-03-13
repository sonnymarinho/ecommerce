import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ProductsPage from '../../pages/Products';
import { Product } from '../../types/Product';


jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/useProducts', () => {
  const jsonProducts = require('../../data/products.json');
  const formatCurrency = (price: number) => {
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  let products = jest.fn(() => [] as Product[]);

  products = jsonProducts.map((product: Product) => ({
    ...product,
    formattedPrice: formatCurrency(product.price),
    quantity: 0,
    subTotalPrice: 0,
  }));

  return {
    useProducts: () => ({
      orderedTitle: {
        title: '',
      },
      products,
    }),
  };
});

jest.mock('../../hooks/useCart', () => {
  const addProductFunction = jest.fn((product: Product) => ({}));

  return {
    useCart: () => ({
      addProduct: addProductFunction,
      totalItems: 0,
    }),
  };
});


describe('ProductsPage', () => {

  it('should be able to render the products dynamically', async () => {
    const { getAllByTestId } = render(<ProductsPage />);

    const allProducts = getAllByTestId('product-item');

    await waitFor(() => {
      expect(allProducts.length).toBe(9);
    });
  });

  it('should be able to add product to cart', async () => {
    const { getAllByTestId } = render(<ProductsPage />);

    const btnAddProduct = getAllByTestId('add-product-button')[0];

    fireEvent.click(btnAddProduct);
  });
});
