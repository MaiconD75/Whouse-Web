import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  overflow: none;
  flex-direction: row;
  justify-content: space-around;

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
  border: 3px solid ${props => props.theme.colors.primaryLight};
  background-color: ${props => props.theme.colors.primaryDark};
  width: 80%;
  height: 5.4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  text-decoration: none;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5rem #372e6132;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      box-shadow: -1rem 1rem 1rem #372e6132;
      transform: translate(1rem, -1rem);
    }
  }

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 75%;
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
    color: ${props => props.theme.colors.textDark};
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.6rem;
    height: 50%;
    white-space: nowrap;
  }
`;

export const EditButton = styled.button`
  position: static;
  border: 3px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primaryDark};
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  border-radius: 3rem 0 0 3rem;
  box-shadow: 0 0 0.5rem #3e481991;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      box-shadow: -1rem 1rem 1rem #3e481991;
      transform: translate(1rem, -1rem);
    }
  }
`;
