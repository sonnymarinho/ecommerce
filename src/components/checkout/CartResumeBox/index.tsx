import React, { useMemo } from 'react';
import { useCart } from '../../../hooks/useCart';
import formatCurrency from '../../../utils/formatCurrency';

import { Container } from './styles';

const CartResumeBox: React.FC = () => {
  const { subTotal, isFreeShipping, shippingPrice, totalAmount } = useCart();

  const formatted = useMemo(() => {
    return {
      subTotal: formatCurrency(subTotal),
      shippingPrice: formatCurrency(shippingPrice),
      totalAmount: formatCurrency(totalAmount),
    };
  }, [subTotal, shippingPrice, totalAmount]);

  return (
    <Container>
      <section>
        <header>
          <h2>Resumo do pedido</h2>
        </header>
        <div>
          <b>Total dos produtos</b>
          <span>{formatted.subTotal}</span>
        </div>
        <div>
          <b>Frete</b>
          <span>
            {isFreeShipping ? 'frete gratis 🎉' : formatted.shippingPrice}
          </span>
        </div>

        <hr />

        <div className="total">
          <span>Total</span>
          <b>{formatted.totalAmount}</b>
        </div>
      </section>

      <button type="button">Finalizar compra</button>
    </Container>
  );
};

export default CartResumeBox;
