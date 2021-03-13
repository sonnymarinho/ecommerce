import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 496px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.07);
  text-align: center;
  position: relative;

  h2 {
    margin-bottom: 2rem;
  }

  nav {
    display: flex;
    justify-content: space-evenly;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3rem;
      padding: 0.5rem 1rem;
      border-radius: 8px;

      border: none;
      outline: none;

      &.remove {
        background: rgba(253, 149, 31, 0.15);
        color: var(--orange);
        font-weight: 600;
      }

      &.cancel {
        background: rgba(138, 139, 148, 0.15);
        color: rgba(138, 139, 148, 0.8);
        font-weight: 600;
      }
    }
  }
`;
