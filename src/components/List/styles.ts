import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  overflow: none;
  width: 100%;
  flex-direction: row;

  & + div {
    margin-top: 0.8rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 1.6rem;
    }
  }
`;

export const ItemContainer = styled.a`
  border: 2px solid ${props => props.theme.colors.primaryContrast};
  background-color: ${props => props.theme.colors.primaryDark};
  flex: 1;
  margin-right: 1rem;
  width: calc(100% - 5rem);
  height: 5.4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.8rem #372e6132;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      transform: translate(0.2rem, -0.2rem);
    }
  }

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 85%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: ${props => props.theme.colors.textLight};
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50%;
    white-space: nowrap;
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.6rem;
    height: 50%;
    white-space: nowrap;
  }
`;

export const EditButton = styled.button`
  border: 2px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primaryDark};
  display: flex;
  width: 4rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.8rem #372e6132;
  border-radius: 3rem 0 0 3rem;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      transform: translate(0.2rem, -0.2rem);
    }
  }
`;
