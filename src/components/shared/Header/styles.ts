import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 232px;
  width: 100%;
  background: var(--header);

  &.lowerSize {
    height: 152px;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 0;
    width: 100%;
    max-width: 1120px;

    > div:first-child {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const CartCounter = styled(Link)`
  position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--orange);
    color: var(--header);
    font-size: 12px;
    font-weight: 600;
    border-radius: 1rem;
    padding: 0.2rem;
  }
`;
