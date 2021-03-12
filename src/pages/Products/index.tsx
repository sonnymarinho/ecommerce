import React from 'react';

import ProductsList from '../../components/products/ProductsList';
import Header from '../../components/shared/Header';
import PageTitle from '../../components/shared/PageTitle';

import { Container, Main } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <PageTitle>Nossos Produtos</PageTitle>
        <ProductsList />
      </Main>
    </Container>
  );
};

export default Products;
