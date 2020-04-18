import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    purple: '#221a36',
    yellow: '#dde5c9',
    pink: '#e91e63',
  },
  mediaQueries: {
    large: '(max-width: 1279px)',
    medium: '(max-width: 679px)',
    small: '(max-width: 449px)',
  },
  shadow:
    '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)',
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
