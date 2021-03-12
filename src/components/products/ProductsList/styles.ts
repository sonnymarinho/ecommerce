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

  > img {
    height: 200px;
  }

  p {
    font-size: 1.5rem;
    color: var(--product-title);
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
