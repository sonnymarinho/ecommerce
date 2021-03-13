import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';
import { Product } from '../../../types/Product';

import { Container, InfoContainer, ButtonsContainer } from './styles';

interface SelectedProductProps {
  product: Product;
}

const SelectedProduct: React.FC<SelectedProductProps> = ({ product }) => {
  const { addProduct, subtractProduct } = useCart();

  return (
    <Container>
      <img src={`assets/images/products/${product.image}`} alt={product.name} />
      <InfoContainer>
        <b>{product.name}</b>
        <p>
          {product.quantity}
          <span>x</span>
          {product.price}
        </p>
        <span>{product.formattedSubTotalPrice}</span>
      </InfoContainer>
      <ButtonsContainer>
        <button type="button" onClick={() => addProduct(product)}>
          <FiPlus />
        </button>
        <button type="button" onClick={() => subtractProduct(product)}>
          <FiMinus />
        </button>
      </ButtonsContainer>
    </Container>
  );
};

export default SelectedProduct;
