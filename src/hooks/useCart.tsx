import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import Product from '../types/Product';

type Products = Array<Product & { total: number }>;

interface CartContextData {
  products: Products;
  totalItems: number;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

interface CartProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC<CartProps> = ({ children }) => {
  const [products, setProducts] = useState<Products>([] as Products);

  const totalItems = useMemo(() => {
    return products.reduce((total, product) => total + product.total, 0);
  }, [products]);

  const addProduct = useCallback(
    (product: Product) => {
      const updatedProducts = products;

      const index = updatedProducts.findIndex(({ id }) => product.id === id);

      const productAlreadyExists = index > 0;

      if (productAlreadyExists) {
        updatedProducts[index].total += 1;
      } else {
        updatedProducts.push({
          ...product,
          total: 1,
        });
      }

      setProducts([...updatedProducts]);
    },
    [products],
  );

  const removeProduct = useCallback(
    (product: Product) => {
      const updatedProducts = products;

      const index = updatedProducts.findIndex(({ id }) => product.id === id);

      const productAlreadyExists = index > 0;

      if (productAlreadyExists) {
        const { total } = updatedProducts[index];
        updatedProducts[index].total = total > 0 ? total - 1 : 0;
      }

      setProducts(updatedProducts);
    },
    [products],
  );

  return (
    <CartContext.Provider
      value={{
        products,
        totalItems,
        addProduct,
        removeProduct,
      }}
    >
      {children}
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
