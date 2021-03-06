import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCallback, useState } from 'react';
import { Container, Options, ToggleButton, Overlay } from './styles';

import { useProducts } from '../../../hooks/useProducts';

const Filter: React.FC = () => {
  const { orderBy, orderedBy, orderedTitle } = useProducts();

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = useCallback(() => {
    setIsOptionsVisible(!isOptionsVisible);
  }, [isOptionsVisible]);

  return (
    <Overlay>
      <OutsideClickHandler onOutsideClick={() => setIsOptionsVisible(false)}>
        <Container>
          <ToggleButton
            className="toggle-button"
            data-testid="filter-button"
            type="button"
            onClick={toggleOptionsVisibility}
          >
            ordenar por
            <span>
              {orderedTitle.title}
              <b>{orderedTitle.subtitle}</b>
            </span>
            <img src="assets/icons/arrow-down-icon.svg" alt="arrow down" />
          </ToggleButton>

          {isOptionsVisible && (
            <Options>
              <li>
                <span>preço</span>
                <nav>
                  <button
                    data-testid="asc-price-button"
                    type="button"
                    className={`${
                      orderedBy === 'asc-price' ? 'selected' : '.available'
                    }`}
                    onClick={() => orderBy('asc-price')}
                  >
                    mais barato
                  </button>
                  <button
                    data-testid="desc-price-button"
                    type="button"
                    className={`${
                      orderedBy === 'desc-price' ? 'selected' : '.available'
                    }`}
                    onClick={() => orderBy('desc-price')}
                  >
                    mais caro
                  </button>
                </nav>
              </li>

              <li>
                <span>popularidade</span>
                <nav>
                  <button
                    data-testid="asc-popularity-button"
                    type="button"
                    className={`${
                      orderedBy === 'asc-popularity' ? 'selected' : '.available'
                    }`}
                    onClick={() => orderBy('asc-popularity')}
                  >
                    menos popular
                  </button>
                  <button
                    data-testid="desc-popularity-button"
                    type="button"
                    className={`${
                      orderedBy === 'desc-popularity'
                        ? 'selected'
                        : '.available'
                    }`}
                    onClick={() => orderBy('desc-popularity')}
                  >
                    mais popular
                  </button>
                </nav>
              </li>

              <li>
                <span>oderm alfabética</span>
                <nav>
                  <button
                    data-testid="asc-alphabeticalOrder-button"
                    type="button"
                    className={`${
                      orderedBy === 'asc-alphabeticalOrder'
                        ? 'selected'
                        : '.available'
                    }`}
                    onClick={() => orderBy('asc-alphabeticalOrder')}
                  >
                    a - z
                  </button>
                  <button
                    data-testid="desc-alphabeticalOrder-button"
                    type="button"
                    className={`${
                      orderedBy === 'desc-alphabeticalOrder'
                        ? 'selected'
                        : '.available'
                    }`}
                    onClick={() => orderBy('desc-alphabeticalOrder')}
                  >
                    z - a
                  </button>
                </nav>
              </li>
            </Options>
          )}
        </Container>
      </OutsideClickHandler>
    </Overlay>
  );
};

export default Filter;
