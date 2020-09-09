import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
  Page,
  BackButton,
  Background,
  MainContainer,
  HeaderContainer,
} from './styles';

interface ILayoutProps {
  withoutBack?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ withoutBack, children }) => {
  const { goBack } = useHistory();

  return (
    <Page>
      <HeaderContainer>
        {!withoutBack && (
          <BackButton onClick={goBack}>
            <FiArrowLeft />
          </BackButton>
        )}
      </HeaderContainer>
      <Background>
        <MainContainer>{children}</MainContainer>
      </Background>
    </Page>
  );
};

export default Layout;
