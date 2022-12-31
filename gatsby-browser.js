import React from 'react';
import ThemeProvider from './../magnetik/src/context/index';
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
