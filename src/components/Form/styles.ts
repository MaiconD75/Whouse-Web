import styled from 'styled-components';
import { Form } from '@unform/web';
import { Modal } from '@material-ui/core';

export const UnformModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Unform = styled(Form)`
  display: flex;
  width: 70vw;
  padding: 1.2rem;
  justify-content: space-between;
  align-items: flex-start;
  background: ${props => props.theme.colors.primaryDark};
  border: 3px solid ${props => props.theme.colors.primaryLight};
  border-radius: 0.8rem;
  flex-direction: column;
  max-width: 300px;

  @media (min-width: 700px) {
    width: 30vw;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.2rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  button {
    color: ${props => props.theme.colors.textLight};
    background: ${props => props.theme.colors.green};
    border: none;
    border-radius: 0.4rem;
    flex: 1;
    margin: 0 0.2rem;
    height: 1.6rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.red} !important;
`;
