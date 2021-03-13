import React from 'react';
import SelectedProduct from '../../components/checkout/SelectedProduct';
import Header from '../../components/shared/Header';
import { useCart } from '../../hooks/useCart';

import {
  Container,
  Main,
  Content,
  LeftContainer,
  RightContainer,
} from './styles';

const Checkout: React.FC = () => {
  const { selectedProducts } = useCart();

  return (
    <Container>
      <Header isFilterDisbled />
      <Main>
        <Content>
          <LeftContainer>
            {selectedProducts.map(product => (
              <SelectedProduct key={product.id} product={product} />
            ))}
          </LeftContainer>
          <RightContainer />
        </Content>
      </Main>
    </Container>
  );
};

export default Checkout;
