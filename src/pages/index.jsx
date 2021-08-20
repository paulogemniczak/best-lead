
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../components/Header';
import Main from '../components/Main';
import GlobalStyle from "../styles/globals";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Main />
    </ThemeProvider>
  );
}
