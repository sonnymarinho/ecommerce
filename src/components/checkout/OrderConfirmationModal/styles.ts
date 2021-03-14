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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 712px;
  height: 280px;
  background: var(--white);
  border-radius: 16px;

  h2 {
    position: relative;
    color: var(--dark-gray);
    margin-bottom: 2rem;

    img {
      position: absolute;
      left: -3rem;
    }
  }

  p {
    margin-bottom: 3rem;
    font-weight: 600;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    height: 3rem;
    width: 9rem;

    border: none;
    outline: none;

    background: rgba(138, 139, 148, 0.15);
    color: rgba(138, 139, 148, 0.8);
    font-weight: 600;
  }
`;
