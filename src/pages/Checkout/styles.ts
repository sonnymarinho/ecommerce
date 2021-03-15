import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 504px;
  column-gap: 3rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 928px;
    margin: 0 auto;
    padding: 2rem 5rem;

    > section:nth-child(2) {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 6%;
  }
`;

export const LeftContainer = styled.section``;

export const RightContainer = styled.section``;
