import React from 'react';

import { Background, MainContainer } from './styles';

interface ComponentProps {
  component: React.FC;
}

const Layout: React.FC<ComponentProps> = ({ component: Component }, props) => {
  return (
    <Background>
      <MainContainer>
        <Component {...props} />
      </MainContainer>
    </Background>
  );
};

export default Layout;
