import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const TopContainer = styled.section`
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: space-between;

  margin: 2rem 2rem 6rem;

  h1 {
    font-weight: 500;
  }

  @media (max-width: 1120px) {
    max-width: 848px;
    margin: 2rem auto 6rem auto;
    max-width: 928px;
    padding: 2rem 5rem;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;

    h1 {
      margin-bottom: 3rem;
    }
  }
`;
