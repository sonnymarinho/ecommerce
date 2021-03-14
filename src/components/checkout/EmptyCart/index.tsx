import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const EmptyCart: React.FC = () => {
  return (
    <Container data-testid="empty-cart-message">
      <h2>
        Ops, carrinho vazio
        <img src="assets/icons/smiling-face.svg" alt="smiling face" />
      </h2>
      <p>
        Não foram encontrados itens adiconados à sua lista de compras. Tente
        adicionar alguns na página de produtos e volte aqui novamente.
      </p>
      <Link to="/">
        <FiArrowLeft />
        voltar à página de produtos
      </Link>
    </Container>
  );
};

export default EmptyCart;
