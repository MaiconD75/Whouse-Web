import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/index';
import defaultTheme from './styles/themes/defaultTheme';
import GlobalStyle from './styles/global';
import { FormProvider } from './hooks/FormContext';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <FormProvider>
            <Routes />
          </FormProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
