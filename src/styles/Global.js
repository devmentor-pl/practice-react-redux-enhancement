import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
 --color-1: rgb(72 153 248);
 --color-1-dark: rgb(0 122 255);
 --color-2: rgb(228 230 238);
 --color-input-background: rgb(240 241 241);
 --color-button-disabled: lightgrey;
 --font-color: grey;
 --font-color-error: orangered;
 --font-color-placeholder: darkgrey;
 --dark-color-1: rgb(242 116 14);
 --dark-color-2: rgb(42 46 49);
 --dark-color-3: rgb(248 249 249);
 --box-shadow: 5px 5px 42px 15px rgba(206, 207, 224, 0.95);
}

body {
    font-family: 'SFProText', sans-serif;
    background: var(--background-color);
    background-repeat: no-repeat;
    height: 100vh;
    color: var(--color-4)

  }

  h1, h2, h3  {
    font-family: 'SFProBold', sans-serif;

}

h2 {
  font-size: 1.75em;
  margin-bottom: 0.5em;
}

  .body-no-scroll {
    overflow: hidden;
  }

  button {
    background-color: var(--color-1);
    border: none;
    min-width: 200px;
    border-radius: 5px;
    padding: 0.75em;
    color: white;
    font-family: 'SFProText', sans-serif;
    font-size: 0.9em;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-1-dark);
  }

  
`;

export default GlobalStyles;
