import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../../hooks/useCart';

import { Overlay, Container } from './styles';

const RemoveProductModal: React.FC = () => {
  const { closeRemoveProductModal, confirmProductRemotion } = useCart();

  return (
    <Overlay>
      <OutsideClickHandler onOutsideClick={closeRemoveProductModal}>
        <Container data-testid="message-container">
          <h2>Deseja remover o produto</h2>
          <nav>
            <button
              data-testid="cancel-button"
              onClick={() => closeRemoveProductModal()}
              className="cancel"
              type="button"
            >
              cancelar
            </button>
            <button
              data-testid="remove-button"
              onClick={() => confirmProductRemotion()}
              className="remove"
              type="button"
            >
              remover
            </button>
          </nav>
        </Container>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default RemoveProductModal;
