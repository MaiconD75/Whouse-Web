import React from 'react';

import { Background, MainContainer } from './styles';


const Layout: React.FC = ({ children }) => {

  return (
    <Background>
      <MainContainer>
        {children}
      </MainContainer>
    </Background>
  );
};

export default Layout;
