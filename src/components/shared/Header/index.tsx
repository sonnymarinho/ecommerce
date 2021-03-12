import React, { useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, CartCounter } from './styles';

import Filter from '../Filter';

import { useCart } from '../../../hooks/useCart';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  const formattedTotal = useMemo(() => String(totalItems).padStart(2, '0'), [
    totalItems,
  ]);

  return (
    <Container>
      <header>
        <div>
          <img src="assets/logo.svg" alt="logo" />
          <CartCounter>
            <FiShoppingCart size={36} />
            <span>{formattedTotal}</span>
          </CartCounter>
        </div>
        <div>
          <Filter />
        </div>
      </header>
    </Container>
  );
};

export default Header;
