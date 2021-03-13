import React from 'react';
import CartResumeBox from '../../components/checkout/CartResumeBox';
import EmptyCart from '../../components/checkout/EmptyCart';
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
        {selectedProducts.length ? (
          <Content>
            <LeftContainer>
              {selectedProducts.map(product => (
                <SelectedProduct key={product.id} product={product} />
              ))}
            </LeftContainer>
            <RightContainer>
              <CartResumeBox />
            </RightContainer>
          </Content>
        ) : (
          <EmptyCart />
        )}
      </Main>
    </Container>
  );
};

export default Checkout;
