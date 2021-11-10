import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/bg.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px Roboto, sans-serif;
  }

  body {
    background: #F2F2FA url(${backgroundImage}) no-repeat 50% 5%;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 700px;
    padding: 40px 20px;
    margin: 0 auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;
