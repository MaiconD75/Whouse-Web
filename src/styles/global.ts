import { createGlobalStyle } from 'styled-components';
import whouseBG from '../assets/Warehouse.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #eee;
  }

  body {
    background-image: url(${whouseBG});
    background-size: cover;
    background-position: initial;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex: 1;
    min-height: 100vh;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #eee;
  }

  #root {
    display: flex;
    flex: 1;
  }

  button{
    cursor: pointer;
  }
`;
