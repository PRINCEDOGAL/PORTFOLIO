import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #111;
    color: #f0f0f0;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    line-height: 1.2;
    color: #fff;
  }
  
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    span {
      color: #ff6624; // La couleur orange de votre portfolio
    }
  }

  a {
    color: #ff6624;
    text-decoration: none;
  }

  section {
    padding: 100px 5%;
  }
`;

export default GlobalStyles;