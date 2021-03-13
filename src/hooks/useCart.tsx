import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import RemoveProductModal from '../components/checkout/RemoveProductModal';
import { Product } from '../types/Product';
import formatCurrency from '../utils/formatCurrency';
import { useProducts } from './useProducts';

interface CartContextData {
  totalItems: number;
  addProduct: (product: Product) => void;
  subtractProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  closeModal: () => void;
  confirmProductRemotion: () => void;
  selectedProducts: Product[];
}

interface CartProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC<CartProps> = ({ children }) => {
  const [productToRemove, setProductToRemove] = useState<Product>();

  const [isModalActive, setIsModalActive] = useState(false);

  const { products, updateProducts } = useProducts();

  const totalItems = useMemo(() => {
    return products.reduce((total, product) => total + product.quantity, 0);
  }, [products]);

  const addProduct = useCallback(
    (product: Product) => {
      const index = products.findIndex(({ id }) => product.id === id);

      const productAlreadyExists = index >= 0;

      if (productAlreadyExists) {
        const quantity = products[index].quantity + 1;
        const { price } = products[index];

        products[index].quantity = quantity;
        products[index].subTotalPrice = quantity * price;
        products[index].formattedSubTotalPrice = formatCurrency(
          quantity * price,
        );
      } else {
        products.push({
          ...product,
          quantity: 1,
          subTotalPrice: product.price,
        });
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
          setIsModalActive(true);
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
    setIsModalActive(false);
  }, [removeProduct, productToRemove]);

  const closeModal = useCallback(() => {
    setIsModalActive(false);
  }, []);

  const selectedProducts = useMemo(
    () => products.filter(({ quantity }) => !!quantity),
    [products],
  );

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addProduct,
        subtractProduct,
        removeProduct,
        closeModal,
        confirmProductRemotion,
        selectedProducts,
      }}
    >
      {children}
      {isModalActive && <RemoveProductModal />}
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
