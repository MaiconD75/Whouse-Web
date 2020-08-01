import styled from 'styled-components';

import waveCM from '../../assets/WaveCM.svg';

export const Background = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 36px 0;
  background-image: url(${waveCM});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const MainContainer = styled.div`
  background-color: #141128;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 0 15px #2b2d2e;
  flex: 1;
  margin: 0 auto;
  min-height: 90vh;
  max-width: 48vw;
`;
