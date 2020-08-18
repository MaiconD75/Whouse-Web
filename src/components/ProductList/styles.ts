import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const ProductItem = styled.li`
  border: 3px solid ${props => props.theme.colors.primaryLight};
  background-color: ${props => props.theme.colors.primaryDark};
  height: 5.4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5rem #372e6132;
  transition: 250ms;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 1.2rem;
    background-color: #999;
  }

  & + li {
    margin-top: 0.8rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 1.6rem;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0.8rem;

  strong {
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50%;
    white-space: normal;
  }

  span {
    color: ${props => props.theme.colors.textDark};
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.6rem;
    height: 50%;
    white-space: normal;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.8rem;
  border-left: 1px solid ${props => props.theme.colors.primaryLight};
  align-items: center;

  button {
    border: none;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: ${props => props.theme.colors.secondaryDark};
  }
  input {
    max-width: 2.4rem;
    height: 1.6rem;
    font-size: 0.8rem;
    background: ${props => props.theme.colors.primaryDark};
    text-align: center;
    border: 3px solid ${props => props.theme.colors.primaryLight};
    border-radius: 0.4rem;
    margin: 0.2rem 0;
  }
`;

export const SaveButton = styled.button`
  width: 2.6rem;
  height: 1.6rem;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.textLight};
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
`;
