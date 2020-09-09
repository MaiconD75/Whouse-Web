import styled from 'styled-components';

export const Page = styled.div`
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

export const BackButton = styled.button`
  align-self: flex-start;

  display: flex;
  border: none;
  align-items: center;
  margin: auto 0;
  padding: 0 1rem;
  height: calc(100% - 2rem);
  border-right: 2px solid ${props => props.theme.colors.secondaryContrast};
  background: transparent;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.text};
    font-size: 1.4rem;
  }
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(100vh - 5rem);

  @media (min-width: 700px) {
    padding: 1.6rem 0;
    height: auto;
  }
`;

export const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryDark};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 700px) {
    height: auto;
    width: 50vw;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 20px;
    box-shadow: 0 0 1.2rem #00000093;
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primaryLight};
  display: flex;
  flex: 1;
  padding: 0.4rem 1.4rem;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  box-shadow: 0 0 1rem #00000093;
`;
