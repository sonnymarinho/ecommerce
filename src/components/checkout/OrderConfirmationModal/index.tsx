import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../../hooks/useCart';

import { Overlay, Container } from './styles';

const OrderConfirmationModal: React.FC = () => {
  const { confirmOrderConfirmation } = useCart();

  return (
    <Overlay>
      <OutsideClickHandler onOutsideClick={confirmOrderConfirmation}>
        <Container data-testid="message-container">
          <h2>
            <img src="assets/icons/check.svg" alt="check" />
            Compra confirmada
          </h2>
          <p>Agradecemos por ter comprado com a gente 😉</p>
          <button
            data-testid="confirm-button"
            onClick={() => confirmOrderConfirmation()}
            type="button"
          >
            ok
          </button>
        </Container>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default OrderConfirmationModal;
