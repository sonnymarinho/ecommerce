import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

:root {
  --white: #fff;
  --background: #212025;
  --header: #121214;
  --gray-line: #DCDDE0;
  --text: #8B8B94;
  --title: #A8A8B3;
  --product-title: #3d3d4d;
  --orange: #FD951F;
  --green: #04D361;
  --purple: #6674FF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--background);
  color: var(--text);
}
body, input, textarea, button {
  font: 400 16px "Poppins", sans-serif;
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
`;
