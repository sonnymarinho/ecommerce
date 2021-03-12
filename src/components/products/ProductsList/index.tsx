import React from 'react';
import { Container, Product } from './styles';

import { useProducts } from '../../../hooks/useProducts';
import { useCart } from '../../../hooks/useCart';

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  formattedPrice: string;
}

const ProductsList: React.FC = () => {
  const { products } = useProducts();
  const { addProduct } = useCart();

  return (
    <Container>
      {products.map(product => (
        <Product key={product.id}>
          <img
            src={`assets/images/products/${product.image}`}
            alt={product.name}
          />
          <p>{product.name}</p>
          <span>{product.formattedPrice}</span>
          <button type="button" onClick={() => addProduct(product)}>
            <span>Adicionar</span>
            <div>
              <img src="assets/icons/cart-icon.svg" alt="cart icon" />
            </div>
          </button>
        </Product>
      ))}
    </Container>
  );
};

export default ProductsList;
