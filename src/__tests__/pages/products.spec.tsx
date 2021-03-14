import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ProductsPage from '../../pages/Products';
import { Product } from '../../types/Product';

const formattedProducts = [
  {
    id: 312,
    name: 'Super Mario Odyssey',
    price: 197.88,
    score: 100,
    image: 'super-mario-odyssey.png',
    formattedPrice: 'R$ 197,88',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 201,
    name: 'Call Of Duty Infinite Warfare',
    price: 49.99,
    score: 80,
    image: 'call-of-duty-infinite-warfare.png',
    formattedPrice: 'R$ 49,99',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 102,
    name: 'The Witcher III Wild Hunt',
    price: 119.5,
    score: 250,
    image: 'the-witcher-iii-wild-hunt.png',
    formattedPrice: 'R$ 119,50',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 99,
    name: 'Call Of Duty WWII',
    price: 249.99,
    score: 205,
    image: 'call-of-duty-wwii.png',
    formattedPrice: 'R$ 249,99',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 12,
    name: 'Mortal Kombat XL',
    price: 69.99,
    score: 150,
    image: 'mortal-kombat-xl.png',
    formattedPrice: 'R$ 69,99',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 74,
    name: 'Shards of Darkness',
    price: 71.94,
    score: 400,
    image: 'shards-of-darkness.png',
    formattedPrice: 'R$ 71,94',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 31,
    name: 'Terra Média: Sombras de Mordor',
    price: 79.99,
    score: 50,
    image: 'terra-media-sombras-de-mordor.png',
    formattedPrice: 'R$ 79,99',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 420,
    name: 'FIFA 18',
    price: 195.39,
    score: 325,
    image: 'fifa-18.png',
    formattedPrice: 'R$ 195,39',
    quantity: 0,
    subTotalPrice: 0,
  },
  {
    id: 501,
    name: 'Horizon Zero Dawn',
    price: 115.8,
    score: 290,
    image: 'horizon-zero-dawn.png',
    formattedPrice: 'R$ 115,80',
    quantity: 0,
    subTotalPrice: 0,
  },
];

let mockedProducts = formattedProducts;

const mockedOrderBy = jest.fn()

let mockedOrderedBy = 'desc-popularity';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/useProducts', () => {
  return {
    useProducts: () => ({
      orderedTitle: {
        title: '',
      },
      products: mockedProducts,
      orderBy: mockedOrderBy,
      orderedBy: mockedOrderedBy
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

  beforeEach(() => {
    mockedProducts = formattedProducts;
  })

  it('should be able to render the products dynamically', async () => {
    const { getAllByTestId } = render(<ProductsPage />);

    const allProducts = getAllByTestId('product-item');

    await waitFor(() => {
      expect(allProducts.length).toBe(9);
    });
  });

  it('should be able to render the products dynamically with product already added quantity', async () => {
    mockedProducts = formattedProducts.map((product)=> ({
      ...product,
      quantity: 1,
    }))

    const { getAllByTestId } = render(<ProductsPage />);

    const allProductsWithQuantityTag = getAllByTestId('product-quantity');

    await waitFor(() => {
      expect(allProductsWithQuantityTag.length).toBe(9);
    });
  });

  it('should be able to add product to cart', async () => {
    const { getAllByTestId } = render(<ProductsPage />);

    const btnAddProduct = getAllByTestId('add-product-button')[0];

    fireEvent.click(btnAddProduct);
  });

  it('should be able to list in asc-price', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('asc-price-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'asc-price';
    })

    expect(mockedOrderBy).toBeCalledWith('asc-price')
  });

  it('should be able to list in desc-price', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('desc-price-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'desc-price';
    })

    expect(mockedOrderBy).toBeCalledWith('desc-price')
  });

  it('should be able to list in asc-popularity', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('asc-popularity-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'asc-popularity';
    })

    expect(mockedOrderBy).toBeCalledWith('asc-popularity')
  });

  it('should be able to list in desc-popularity', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('desc-popularity-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'desc-popularity';
    })

    expect(mockedOrderBy).toBeCalledWith('desc-popularity')
  });

  it('should be able to list in asc-alphabeticalOrder', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('asc-alphabeticalOrder-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'asc-alphabeticalOrder';
    })

    expect(mockedOrderBy).toBeCalledWith('asc-alphabeticalOrder')
  });

  it('should be able to list in desc-alphabeticalOrder', async () => {
    const { getByTestId } = render(<ProductsPage />);

    const filterButton = getByTestId('filter-button');

    await waitFor(() => {
      fireEvent.click(filterButton);
    })

    const orderButton = getByTestId('desc-alphabeticalOrder-button');

    await waitFor(() => {
      fireEvent.click(orderButton);
      mockedOrderedBy = 'desc-alphabeticalOrder';
    })

    expect(mockedOrderBy).toBeCalledWith('desc-alphabeticalOrder')
  });

});
