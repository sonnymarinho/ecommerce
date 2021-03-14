import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
  grid-column-gap: minmax(48px, 1fr);
  align-content: space-between;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    max-width: 928px;
    padding: 0 5rem;
  }
`;

const ResponsiveProduct = css`
  @media (max-width: 1120px) and (min-width: 620px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 12rem;
    border-radius: 8px;
    background-color: var(--white);
    padding: 2rem;

    > img {
      height: 9rem;
      width: 9rem;
      margin-right: 0.5rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;

      .info {
        margin-right: auto;
        p {
          text-align: start;
          font-size: 1.6rem;
          margin-top: 0px;
        }

        span {
          text-align: start;
          font-size: 1.3rem;
          color: var(--text);
          font-weight: 600;
        }
      }
    }

    > button {
      width: 186px;
      align-self: flex-end;
      flex-shrink: 0;
      margin-left: 2rem;
    }

    .productsAdded {
      top: 1rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
    }

    &:nth-child(n + 1) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 855px) and (min-width: 620px) {
    .info {
      width: 80%;
      p {
        font-size: 1.25rem;
      }

      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 720) and (min-width: 620px) {
    > div {
      > div {
        width: 80%;
        > div {
          p {
            font-size: 1.25rem;
          }

          span {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media (max-width: 620px) {
    padding: 3rem 4rem;
    justify-content: space-between;

    > img {
      width: 200px;
      align-self: center;
    }

    .info {
      display: flex;
      align-items: center;
      flex-direction: column;

      > p {
        font-size: 1.4rem;
      }

      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }

    .productsAdded {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 312px;
  height: 440px;
  margin-bottom: 64px;
  justify-self: center;

  background: var(--white);
  border-radius: 8px;
  padding: 1.5rem 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;

    .info {
      margin: auto 0;
    }
  }

  .productsAdded {
    position: absolute;
    top: 1rem;
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
    font-weight: 500;
  }

  > img {
    height: 12rem;
    width: 12rem;
    margin: 0 auto;
  }

  .info {
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.5rem;
      color: var(--dark-gray);
      font-weight: 600;
      text-align: center;
      /* margin-top: 1.8rem; */
    }

    > span {
      font-size: 1.5rem;
      color: var(--text);
      font-weight: 600;
      text-align: center;
      margin-top: 0.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;

    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;

    span {
      width: 100%;
      color: var(--text);
      font-weight: 600;
    }

    > div {
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

  ${() => ResponsiveProduct}
`;
