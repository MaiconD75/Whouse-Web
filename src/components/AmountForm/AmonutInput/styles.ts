import styled from 'styled-components';

interface IInputProps {
  isError: boolean;
}

export const InputContainer = styled.div`
  input {
    max-width: 2.4rem;
    height: 1.6rem;
    font-size: 0.8rem;
    background: ${props => props.theme.colors.primaryDark};
    text-align: center;
    border: 3px solid ${props => props.theme.colors.primaryLight};
    border-radius: 0.4rem;
    margin: 0.2rem 0;

    &:focus {
      border-color: ${(props: IInputProps) =>
        props.isError ? '#E4091C' : '#009a6b'};
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
