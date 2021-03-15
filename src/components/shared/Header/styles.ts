import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 152px;
  width: 100%;
  background: var(--header);

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
    max-width: 1120px;

    > div:first-child {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: 1120px) {
    header {
      max-width: 928px;
      margin: 0 auto;
      padding: 2rem 5rem;
    }
  }

  @media (max-width: 525px) {
    height: 9rem;

    header {
      padding: 2rem 3rem;
    }

    a:first-child {
      width: 60%;

      img {
        width: 100%;
      }
    }

    a:nth-child(2) {
      width: 5%;

      svg {
        width: 170%;
      }

      span {
        top: -10%;
        right: -120%;
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 375px) {
    height: 7rem;

    header {
      padding: 2rem 3rem;
    }

    a:first-child {
      width: 70%;

      img {
        width: 100%;
      }
    }

    a:nth-child(2) {
      width: 1.2rem;

      svg {
        width: 150%;
      }

      span {
        top: -0%;
        right: -100%;
        font-size: 0.5rem;
      }
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
