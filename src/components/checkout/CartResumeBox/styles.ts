import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--white);
  border-radius: 16px;
  position: sticky;

  section {
    display: flex;
    flex-direction: column;
    padding: 3rem 4rem;
    padding-bottom: 0;

    h2 {
      font-size: 1.5rem;
      color: var(--dark-gray);
      margin-bottom: 1.5rem;
    }

    div:nth-child(n + 2) {
      display: flex;
      flex-direction: column;
      font-size: 1.25rem;
      margin-top: 1.5rem;

      b {
        margin-bottom: 0.5rem;
      }
    }

    hr {
      margin-top: 2rem;
      border: 1px solid var(--gray-line);
    }

    div.total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: var(--purple);
      margin: 0;
      margin: 2.5rem 0;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    border: none;
    outline: none;
    background-color: var(--green);
    color: var(--white);
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 0 0 16px 16px;
  }

  @media (max-width: 425px) {
    section {
      padding: 11%;
      padding-bottom: 0;
    }

    h2 {
      font-size: 100% !important;
    }

    b,
    span {
      font-size: 80% !important;
    }

    button {
      height: 56px;
      font-size: 85%;
    }
  }

  @media (max-width: 320px) {
    div.total {
      margin: 10% !important;
    }

    hr {
      margin: 10% 0 !important ;
    }

    section {
      div {
        margin: 0;
      }
    }
  }
`;
