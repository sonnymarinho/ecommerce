import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  @media (max-width: 920px) {
    &,
    div,
    button {
      width: 100%;
    }

    .toggle-button {
      padding: 2rem 3rem;
    }
  }

  @media (max-width: 620px) {
    .toggle-button {
      flex-direction: column;
      height: fit-content;

      span {
        margin-top: 1rem;
      }

      img {
        margin-top: 1rem;
      }
    }
  }
`;

const ResponsiveOptions = css`
  @media (max-width: 920px) {
    width: 100%;
    padding: 2rem 5rem;
  }

  @media (max-width: 620px) {
    padding: 1rem 5rem;

    li {
      grid-template-columns: 1fr;

      nav {
        margin: 0;
      }

      &:nth-child(n + 1) {
        margin-top: 2rem;
      }
    }
  }
`;

export const Container = styled.div`
  z-index: 9;
  position: relative;

  button {
    outline: none;
    border: none;
    background: var(--white);
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 494px;

  span {
    margin: 0 1rem;
    color: var(--purple);

    b {
      margin-left: 0.5rem;
    }
  }

  img {
    margin-left: 0.5rem;
    height: 0.5rem;
  }
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  width: 496px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: var(--white);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 20px 8px rgba(61, 61, 77, 0.25);
  -moz-box-shadow: 0px 10px 20px 8px rgba(61, 61, 77, 0.25);
  box-shadow: 0px 10px 20px 8px rgba(61, 61, 77, 0.25);

  li {
    display: grid;
    grid-template-columns: 140px 1fr;
    grid-template-rows: 3rem;
    align-items: center;
    list-style: none;
    cursor: pointer;

    span {
      flex-shrink: 0;
    }

    nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;

      button {
        height: 3rem;

        &:hover {
          font-weight: 600;
          color: inherit;
        }

        &.selected {
          font-weight: 600;
          color: var(--purple);
        }
      }
    }

    &:hover {
      color: var(--purple);
      transition: color 0.3s linear;
    }
  }

  //arrow up
  &::before {
    content: '';
    border-style: solid;
    border-color: var(--white) transparent;
    top: -7px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0px 9px 8px 9px;
  }

  ${() => ResponsiveOptions}
`;
