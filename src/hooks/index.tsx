import React from 'react';

import { ToastProvider } from './ToastContext';
import { FormProvider } from './FormContext';

// import { Container } from './styles';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <FormProvider>{children}</FormProvider>
    </ToastProvider>
  );
};

export default AppProvider;
