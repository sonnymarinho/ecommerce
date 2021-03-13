import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../../hooks/useCart';

import { Overlay, Container } from './styles';

const RemoveProductModal: React.FC = () => {
  const { closeModal, confirmProductRemotion } = useCart();

  return (
    <Overlay>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <Container>
          <h2>Deseja remover o produto</h2>

          <nav>
            <button
              onClick={() => closeModal()}
              className="cancel"
              type="button"
            >
              cancelar
            </button>
            <button
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
