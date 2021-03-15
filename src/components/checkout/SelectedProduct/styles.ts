import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  border-radius: 8px;
  background-color: var(--white);
  padding: 1rem 2rem;

  img {
    height: 6rem;
    margin-right: 0.5rem;
  }

  &:nth-child(n + 2) {
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    padding: 2%;

    img {
      height: 75%;
      margin: auto 0;
    }
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem 0;

  b {
    margin-bottom: auto;
    color: var(--dark-gray);
  }

  p {
    font-weight: 600;

    > span {
      margin: 0 0.2rem;
    }
  }

  > span {
    font-weight: 600;
    margin-top: 0.5rem;
    color: var(--purple);
  }

  @media (max-width: 600px) {
    b,
    p,
    span {
      font-size: 85%;
    }
  }

  @media (max-width: 320px) {
    b,
    p,
    span {
      font-size: 60%;
    }
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    outline: none;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;

    background: rgba(102, 116, 255, 0.1);
    color: var(--purple);

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;
