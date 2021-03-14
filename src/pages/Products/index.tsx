import React from 'react';

import ProductsList from '../../components/products/ProductsList';
import Filter from '../../components/shared/Filter';
import Header from '../../components/shared/Header';

import { Container, Main, TopContainer } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <TopContainer className="top-container">
          <h1>Nossos Produtos</h1>
          <Filter />
        </TopContainer>
        <ProductsList />
      </Main>
    </Container>
  );
};

export default Products;
