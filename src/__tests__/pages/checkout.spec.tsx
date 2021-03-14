import React from 'react';
import { fireEvent, getByTestId, render, waitFor } from '@testing-library/react';
import CheckoutPage from '../../pages/Checkout';
import RemoveProductModal from '../../components/checkout/RemoveProductModal';


jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

const products = [
  {
    formattedPrice: "R$ 71,94",
    formattedSubTotalPrice: "R$ 143,88",
    id: 74,
    image: "shards-of-darkness.png",
    name: "Shards of Darkness",
    price: 71.94,
    quantity: 1,
    score: 400,
    subTotalPrice: 143.88
  },
  {
    formattedPrice: "R$ 195,39",
    formattedSubTotalPrice: "R$ 195,39",
    id: 420,
    image: "fifa-18.png",
    name: "FIFA 18",
    price: 195.39,
    quantity: 1,
    score: 325,
    subTotalPrice: 195.39
  },
  {
    formattedPrice: "R$ 115,80",
    formattedSubTotalPrice: "R$ 115,80",
    id: 501,
    image: "horizon-zero-dawn.png",
    name: "Horizon Zero Dawn",
    price: 115.8,
    quantity: 1,
    score: 290,
    subTotalPrice: 11
  },
]

let mockedAddProduct = jest.fn();
let mockedSubtractProduct = jest.fn();
let mockedProducts = products;
let mockedTotalItems = mockedProducts.length;
const mockedCloseModal = jest.fn();
const mockedConfirmProductRemotion = jest.fn();

jest.mock('../../hooks/useCart', () => {
    return {
    useCart: () => ({
      addProduct: mockedAddProduct,
      subtractProduct: mockedSubtractProduct,
      totalItems: mockedTotalItems,
      selectedProducts: mockedProducts,
      closeModal: mockedCloseModal,
      confirmProductRemotion: mockedConfirmProductRemotion,
    }),
  };
});


describe('ProductsPage', () => {

  beforeEach(()=> {
    mockedAddProduct = jest.fn();
    mockedProducts = products;
    mockedTotalItems = mockedProducts.length;
  });


  it('should be able to render the products dynamically', async () => {

    const { getAllByTestId } = render(<CheckoutPage />);

    const all = getAllByTestId('selected-product');

    await waitFor(() => {
      expect(all.length).toBe(3)
    })
  });

  it('should be able to render the empty products page', async () => {

    mockedProducts = []

    const { getByTestId } = render(<CheckoutPage />);

    getByTestId('empty-cart-message');
  });

  it('it should be able to increase the quantity of an existent product', async () => {
    mockedProducts = products.splice(0,1);

    const { getByTestId } = render(<CheckoutPage />);

    const addButton = getByTestId('add-button')


    fireEvent.click(addButton);

    expect(mockedAddProduct).toHaveBeenCalled();
  });

  it('it should be able to decrease the quantity of an existent product', async () => {
    mockedProducts = products.splice(0,1);

    const { getByTestId } = render(<CheckoutPage />);

    const removeButton = getByTestId('remove-button')


    fireEvent.click(removeButton);

    expect(mockedSubtractProduct).toHaveBeenCalled();
  });

  it('it should be able to decrease the quantity of an existent product until zero', async () => {
    const product = {
      formattedPrice: "R$ 71,94",
      formattedSubTotalPrice: "R$ 143,88",
      id: 74,
      image: "shards-of-darkness.png",
      name: "Shards of Darkness",
      price: 71.94,
      quantity: 1,
      score: 400,
      subTotalPrice: 143.88
    };

    mockedProducts = [product];

    const { getByTestId } = render(<CheckoutPage />);

    const removeButton = getByTestId('remove-button')

    fireEvent.click(removeButton);

    expect(mockedSubtractProduct).toHaveBeenCalledWith(product);
  })

  it('should be able to confirm the remotion of a product', async () => {
    const { getByTestId } = render(<RemoveProductModal />);

    const removeButton = getByTestId('remove-button');

    await waitFor(() => {
      fireEvent.click(removeButton);
    })

    expect(mockedConfirmProductRemotion).toBeCalled();
  })

  it('should be able to cancel the remotion of a product', async () => {
    const { getByTestId } = render(<RemoveProductModal />);

    const cancelButton = getByTestId('cancel-button');

    await waitFor(() => {
      fireEvent.click(cancelButton);
    })

    expect(mockedCloseModal).toBeCalled();
  })
})
