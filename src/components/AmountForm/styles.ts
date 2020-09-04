import styled from 'styled-components';
import { Form } from '@unform/web';

export const Unform = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.4rem;
  padding-right: 0;
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
`;
