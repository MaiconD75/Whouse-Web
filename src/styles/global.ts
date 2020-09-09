import { createGlobalStyle } from 'styled-components';

import waveCM from '../assets/WaveCM.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.primaryDark};
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex: 1;
    min-height: 100vh;

    @media (min-width: 700px) {
    background-image: url(${waveCM});
    background-size: 100vw;
    background-color: ${props => props.theme.colors.background};
    }
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  #root {
    display: flex;
    flex: 1;
  }

  button{
    cursor: pointer;
  }
`;
