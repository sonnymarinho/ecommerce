import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 8rem;
  border-radius: 16px;
  background: var(--white);

  h2 {
    display: flex;
    align-items: center;
    color: var(--dark-gray);
    margin-bottom: 2rem;

    img {
      margin-left: 0.5rem;
    }
  }

  p {
    margin-bottom: 3rem;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--dark-gray);
    font-weight: 500;

    svg {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 650px) {
    padding: 3rem 4rem;

    h2 {
      font-size: 1.3rem;
    }

    p,
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    padding: 3rem 4rem;

    h2 {
      font-size: 100%;
    }

    img {
      width: 12%;
      height: 12%;
    }

    p,
    a {
      font-size: 75%;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 80%;

      img {
        display: none;
      }
    }

    p,
    a {
      font-size: 60%;
    }
    a {
      text-align: center !important;
    }
  }
`;
