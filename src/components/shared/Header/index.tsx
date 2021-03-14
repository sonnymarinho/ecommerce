import React, { useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, CartCounter, FilterContainer } from './styles';

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
          <Link to="/">
            <img src="assets/logo.svg" alt="logo" />
          </Link>
          <CartCounter to="/checkout">
            <FiShoppingCart size={36} />
            <span>{formattedTotal}</span>
          </CartCounter>
        </div>
      </header>
    </Container>
  );
};

export default Header;
