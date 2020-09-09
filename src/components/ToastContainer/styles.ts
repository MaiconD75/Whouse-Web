import styled from 'styled-components';

export const Container = styled.div`
  z-index: 7000;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  overflow: hidden;

  @media (min-width: 700px) {
    padding: 30px;
  }
`;
