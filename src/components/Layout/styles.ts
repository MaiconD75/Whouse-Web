import styled from 'styled-components';

import waveCM from '../../assets/WaveCM.svg';

export const Background = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

  @media (min-width: 700px) {
    padding: 1.6rem 0;
    background-image: url(${waveCM});
    background-size: 100vw;
  }
`;

export const MainContainer = styled.div`
  background-color: #141128;
  display: flex;
  flex: 1;

  @media (min-width: 700px) {
    border-radius: 20px;
    box-shadow: 0 0 15px #2b2d2e;
    margin: 0 auto;
    min-height: 90vh;
    max-width: 48vw;
  }
`;
