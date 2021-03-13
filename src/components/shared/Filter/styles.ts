import styled from 'styled-components';

export const Container = styled.div`
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
  width: 496px;
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

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
`;
