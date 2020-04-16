import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: 100%
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  color: #dde5c9;
  font-family: "Roboto Mono", monospace;
  word-wrap: break-word;
  font-kerning: normal;
  background-color: #221A36;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a {
  text-decoration: none;
  color: inherit;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #DDE5C9;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyle;
