import React from 'react';

import { ThemeProvider } from 'styled-components';
import { black, green, grey, red, white } from './colors.ts'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  colors: {
    purple: '#221a36',
    yellow: '#fff9c4',
    pink: '#ff2f69',
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    white,
  },
  mediaQueries: {
    large: '(min-width: 1280px)',
    medium: '(min-width: 680px)',
    small: '(min-width: 450px)',
    landscape: '(max-height: 570px)',
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,
  shadow:
    '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)',
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
