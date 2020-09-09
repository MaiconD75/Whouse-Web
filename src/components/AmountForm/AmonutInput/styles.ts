import styled from 'styled-components';

interface IInputProps {
  isError: boolean;
}

export const InputContainer = styled.div<IInputProps>`
  input {
    max-width: 2.4rem;
    color: ${props => props.theme.colors.textLight};
    height: 1.6rem;
    font-size: 0.8rem;
    background: ${props => props.theme.colors.primaryDark};
    text-align: center;
    border: 2px solid ${props => props.theme.colors.primaryLight};
    border-radius: 0.4rem;
    margin: 0.2rem 0;

    &:focus {
      border-color: ${props =>
        props.isError ? props.theme.colors.red : props.theme.colors.green};
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
