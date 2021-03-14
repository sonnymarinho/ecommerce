import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import OrderConfirmationModal from '../components/checkout/OrderConfirmationModal';
import RemoveProductModal from '../components/checkout/RemoveProductModal';
import { Product } from '../types/Product';
import formatCurrency from '../utils/formatCurrency';
import { useProducts } from './useProducts';

const {
  REACT_APP_MINIMUM_PRICE_FOR_FREE_SHIPPING,
  REACT_APP_SHIPPING_PRICE_PER_PRODUCT,
} = process.env;

interface CartContextData {
  totalItems: number;
  addProduct: (product: Product) => void;
  subtractProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  closeRemoveProductModal: () => void;
  confirmProductRemotion: () => void;
  confirmOrderConfirmation: () => void;
  fireOrderConfirmationAction: () => void;
  selectedProducts: Product[];
  subTotal: number;
  shippingPrice: number;
  isFreeShipping: boolean;
  totalAmount: number;
}

interface CartProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC<CartProps> = ({ children }) => {
  const [productToRemove, setProductToRemove] = useState<Product>();

  const [isRemoveProductModalActive, setIsRemoveProductModalActive] = useState(
    false,
  );

  const [
    isOrderConfirmationModalActive,
    setIsOrderConfirmationModalActive,
  ] = useState(false);

  const { products, updateProducts } = useProducts();

  const totalItems = useMemo(() => {
    return products.reduce((total, product) => total + product.quantity, 0);
  }, [products]);

  const addProduct = useCallback(
    (product: Product) => {
      const index = products.findIndex(({ id }) => product.id === id);

      const productExists = index >= 0;

      if (productExists) {
        const quantity = products[index].quantity + 1;
        const { price } = products[index];

        products[index].quantity = quantity;
        products[index].subTotalPrice = quantity * price;
        products[index].formattedSubTotalPrice = formatCurrency(
          quantity * price,
        );
      }

      updateProducts([...products]);
    },
    [products, updateProducts],
  );

  const subtractProduct = useCallback(
    (product: Product) => {
      const index = products.findIndex(({ id }) => product.id === id);

      const productAlreadyExists = index >= 0;

      if (productAlreadyExists) {
        let { quantity } = products[index];

        if (quantity > 1) {
          const { price } = products[index];
          quantity -= 1;
          products[index].quantity = quantity;
          products[index].subTotalPrice = quantity * price;
          products[index].formattedSubTotalPrice = formatCurrency(
            quantity * price,
          );
        } else {
          setProductToRemove(product);
          setIsRemoveProductModalActive(true);
        }
      }

      updateProducts([...products]);
    },
    [products, updateProducts],
  );

  const removeProduct = useCallback(
    (product: Product) => {
      const index = products.findIndex(({ id }) => product.id === id);

      products[index].quantity = 0;

      updateProducts([...products]);
    },
    [products, updateProducts],
  );

  const confirmProductRemotion = useCallback(() => {
    if (productToRemove) removeProduct(productToRemove);
    setProductToRemove(undefined);
    setIsRemoveProductModalActive(false);
  }, [removeProduct, productToRemove]);

  const closeRemoveProductModal = useCallback(() => {
    setIsRemoveProductModalActive(false);
  }, []);

  const confirmOrderConfirmation = useCallback(() => {
    const emptyCartProducts = products.map(product => ({
      ...product,
      quantity: 0,
      subTotalPrice: 0,
    }));

    updateProducts([...emptyCartProducts]);
    setIsOrderConfirmationModalActive(false);
  }, [products, updateProducts]);

  const fireOrderConfirmationAction = useCallback(() => {
    setIsOrderConfirmationModalActive(true);
  }, []);

  const selectedProducts = useMemo(
    () => products.filter(({ quantity }) => !!quantity),
    [products],
  );

  const subTotal = useMemo(() => {
    return selectedProducts.reduce((total, product) => {
      return total + product.subTotalPrice;
    }, 0);
  }, [selectedProducts]);

  const isFreeShipping = useMemo(() => {
    const minimumPrice =
      Number(REACT_APP_MINIMUM_PRICE_FOR_FREE_SHIPPING) || 250;

    return subTotal > minimumPrice;
  }, [subTotal]);

  const shippingPrice = useMemo(() => {
    const pricePerProduct = Number(REACT_APP_SHIPPING_PRICE_PER_PRODUCT) || 10;

    return isFreeShipping ? 0 : totalItems * pricePerProduct;
  }, [isFreeShipping, totalItems]);

  const totalAmount = useMemo(() => {
    return shippingPrice + subTotal;
  }, [shippingPrice, subTotal]);

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addProduct,
        subtractProduct,
        removeProduct,
        closeRemoveProductModal,
        confirmProductRemotion,
        confirmOrderConfirmation,
        fireOrderConfirmationAction,
        selectedProducts,
        subTotal,
        shippingPrice,
        isFreeShipping,
        totalAmount,
      }}
    >
      {children}
      {isRemoveProductModalActive && <RemoveProductModal />}
      {isOrderConfirmationModalActive && <OrderConfirmationModal />}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must be used within an CartProvider');
  }

  return context;
}

export { useCart, CartProvider };
