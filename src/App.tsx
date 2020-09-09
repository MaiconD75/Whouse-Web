import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';

import Routes from './routes/index';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppProvider>
            <Routes />
          </AppProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
