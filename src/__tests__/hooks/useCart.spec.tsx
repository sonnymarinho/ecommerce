import { CartProvider, useCart } from '../../hooks/useCart';
import { renderHook, act } from '@testing-library/react-hooks';

const products = [
  {
    formattedPrice: "R$ 71,94",
    formattedSubTotalPrice: "",
    id: 74,
    image: "shards-of-darkness.png",
    name: "Shards of Darkness",
    price: 71.94,
    quantity: 0,
    score: 400,
    subTotalPrice: 0
  },
  {
    formattedPrice: "R$ 195,39",
    formattedSubTotalPrice: "",
    id: 420,
    image: "fifa-18.png",
    name: "FIFA 18",
    price: 195.39,
    quantity: 0,
    score: 325,
    subTotalPrice: 0
  },
  {
    formattedPrice: "R$ 115,80",
    formattedSubTotalPrice: "",
    id: 501,
    image: "horizon-zero-dawn.png",
    name: "Horizon Zero Dawn",
    price: 115.8,
    quantity: 0,
    score: 290,
    subTotalPrice: 0
  },
]

let mockedProducts = products;
const mockedUpdateProducts = jest.fn();

jest.mock('../../hooks/useProducts', () => {
  return {
    useProducts: () => ({
      products: mockedProducts,
      updateProducts: mockedUpdateProducts
    })
  }
})


describe('useCart', () => {
  it('should be able to increase the quantity of a product', () => {
    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const { addProduct } = result.current;

    const product = products[0];

    act(()=> addProduct(product));

    expect(mockedUpdateProducts).toHaveBeenCalled()
  })

  it('should be able to decrease the quantity of a product with quantity less than 1', () => {

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const { subtractProduct } = result.current;

    const product = products[0];

    act(()=> subtractProduct(product));

    expect(mockedUpdateProducts).toHaveBeenCalled()
  })

  it('should be able to decrease the quantity of a product with quantity more than 1', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 4
      }: productItem
    })

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const { subtractProduct } = result.current;


    act(()=> subtractProduct(product));

    expect(mockedUpdateProducts).toHaveBeenCalled()
    expect(mockedProducts[0].id).toBe(product.id)
  });

  it('should be able to remove a product from the list', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 1
      }: {
        ...productItem,
        quantity: 2
      }
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const { removeProduct } = result.current;

    act(()=> removeProduct(product));

    const expectedObject = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 0
      }: {
        ...productItem,
        quantity: 2
      }
    })

    expect(mockedUpdateProducts).toHaveBeenCalledWith(expectedObject)
  })

  it('should be able to confirm a product remotion', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 1
      }: {
        ...productItem,
        quantity: 2
      }
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const { subtractProduct, confirmProductRemotion } = result.current;


    act(()=>{
      subtractProduct(product);
      confirmProductRemotion();
    });
  })

  it('should be able to close modal', () => {
    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const spyCloseModal = jest.spyOn(result.current, 'closeModal');

    act(() => result.current.closeModal());

    expect(spyCloseModal).toBeCalled();
  })

  it('should be able to calculate shipping price for subtotal lower than 250', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 3,
        subTotalPrice: 3 * product.price,
      }: productItem
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    expect(result.current.shippingPrice).toBeTruthy();
  })

  it('should be able to calculate free shipping price for subtotal higher than 250', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 4,
        subTotalPrice: 4 * product.price,
      }: productItem
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    expect(result.current.shippingPrice).toBeFalsy();
  })

  it('should be able to calculate the subtotal', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 4,
        subTotalPrice: 4 * product.price,
      }: {
        ...productItem,
        quantity: 1,
        subTotalPrice: 1 * productItem.price,
      }
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const subTotal = Number(
      parseFloat(`${result.current.subTotal}`).toFixed(2)
    );

    expect(subTotal).toBe(598.95);
  })

  it('should be able to calculate the total for shipping free', () => {
    const product = products[0];

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity: 4,
        subTotalPrice: 4 * product.price,
      }: productItem
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const subTotal = Number(
      parseFloat(`${result.current.subTotal}`).toFixed(2)
    );

    const onlyProductsPrice = 4 * product.price;

    expect(subTotal).toBe(onlyProductsPrice);
  })

  it('should be able to calculate the total plus shipping price', () => {
    const unitShippingPrice = (
      Number(process.env.REACT_APP_SHIPPING_PRICE_PER_PRODUCT) || 10
    );
    const product = products[0];
    const quantity = 3;

    mockedProducts = products.map((productItem) =>{
      return productItem.id === product.id ? {
        ...product,
        quantity,
        subTotalPrice: quantity * product.price,
      }: productItem
    });

    const { result } = renderHook(()=> useCart(), {
      wrapper: CartProvider
    });

    const onlyProductsPrice = quantity * product.price;
    const shippingPrice = quantity * unitShippingPrice;
    const expectTotalAmount = onlyProductsPrice + shippingPrice;

    expect(result.current.totalAmount).toBe(expectTotalAmount);
  })
})
