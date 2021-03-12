import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import jsonProducts from '../data/products.json';
import Product from '../types/Product';
import formatCurrency from '../utils/formatCurrency';

const ORDER_METHODS = {
  'asc-price': (a: Product, b: Product) => a.price - b.price,
  'desc-price': (a: Product, b: Product) => b.price - a.price,
  'asc-popularity': (a: Product, b: Product) => a.score - b.score,
  'desc-popularity': (a: Product, b: Product) => b.score - a.score,
  'asc-alphabeticalOrder': (a: Product, b: Product) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
  'desc-alphabeticalOrder': (a: Product, b: Product) =>
    b.name.localeCompare(a.name, 'en', { sensitivity: 'base' }),
};

const ORDER_TITLES = {
  'asc-price': {
    title: 'preço',
    subtitle: 'mais barato',
  },
  'desc-price': {
    title: 'preço',
    subtitle: 'mais caro',
  },
  'asc-popularity': {
    title: 'popularidade',
    subtitle: 'menos popular',
  },
  'desc-popularity': {
    title: 'popularidade',
    subtitle: 'maior popularidade',
  },
  'asc-alphabeticalOrder': {
    title: 'ordem alfabética',
    subtitle: ' a - z',
  },
  'desc-alphabeticalOrder': {
    title: 'ordem alfabética',
    subtitle: 'z - a',
  },
};

type Options = keyof typeof ORDER_METHODS;

interface ProductsContextData {
  products: Product[];
  orderBy: (option: Options) => void;
  orderedBy: Options;
  orderedTitle: { title: string; subtitle: string };
}

interface ProductsProps {
  children: ReactNode;
}

const ProductsContext = createContext({} as ProductsContextData);

const ProductsProvider: React.FC<ProductsProps> = ({ children }) => {
  const [orderedBy, setOrderedBy] = useState<Options>('desc-popularity');

  const [products, setProducts] = useState(() => {
    const formatted = jsonProducts.map(product => ({
      ...product,
      formattedPrice: formatCurrency(product.price),
    })) as Product[];

    return formatted.sort(ORDER_METHODS['asc-popularity']);
  });

  const orderBy = useCallback(
    (option: Options) => {
      const sorted = products.sort(ORDER_METHODS[option]);

      setOrderedBy(option);
      setProducts([...sorted]);
    },
    [products],
  );

  const orderedTitle = useMemo(() => ORDER_TITLES[orderedBy], [orderedBy]);

  return (
    <ProductsContext.Provider
      value={{ products, orderBy, orderedBy, orderedTitle }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): ProductsContextData {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('ProductsContext must be used within an ProductsProvider');
  }

  return context;
}

export { useProducts, ProductsProvider };
