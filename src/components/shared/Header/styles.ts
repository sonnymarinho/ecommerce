import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 232px;
  width: 100%;
  background: var(--header);

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 0;
    width: 100%;
    max-width: 1120px;

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    > div:last-child {
      justify-content: flex-end;
    }
  }
`;

export const CartCounter = styled.div`
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
