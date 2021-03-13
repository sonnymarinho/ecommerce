import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1fr;
  align-content: center;
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 312px;
  height: 440px;
  margin-bottom: 64px;
  justify-self: center;

  background: var(--white);
  border-radius: 8px;
  padding: 1.5rem 2rem;

  .productsAdded {
    position: absolute;
    top: 8px;
    right: 16px;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    background: rgba(253, 149, 31, 0.15);
    color: #ed8c1d;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > img {
    height: 200px;
  }

  p {
    font-size: 1.5rem;
    color: var(--dark-gray);
    font-weight: 600;
    text-align: center;
    margin-top: 1.8rem;
  }

  > span {
    font-size: 1.5rem;
    color: var(--text);
    font-weight: 600;
    text-align: center;
    margin-top: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    margin-top: 1.5rem;

    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;

    span {
      width: 100%;
      color: var(--text);
      font-weight: 600;
    }

    div {
      display: flex;
      background: var(--purple);
      height: 100%;
      width: 4rem;
      border-radius: 0 8px 8px 0;
      justify-content: center;
      align-items: center;

      img {
        width: 1.9rem;
      }
    }
  }
`;
