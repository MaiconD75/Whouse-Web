import styled from 'styled-components';

export interface IInputBlockProps {
  invisible?: boolean;
}

export const InputBlock = styled.div`
  position: relative;
  display: ${(props: IInputBlockProps) => (props.invisible ? 'none' : 'flex')};
  flex-direction: column;

  label {
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
    border-bottom: 2px solid ${props => props.theme.colors.secondaryContrast};
    padding-bottom: 0.4rem;
    margin-bottom: 0.4rem;
  }

  input {
    width: 100%;
    height: 1.6rem;
    padding: 0 0.4rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
  }

  span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.red};
    margin-bottom: 0.4rem;
  }

  & + div {
    margin-top: 0.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 1.6rem);
    height: 2px;
    content: '';
    background: ${props => props.theme.colors.secondary};
    position: absolute;
    right: 0.8rem;
    left: 0.8rem;
    bottom: 0;
  }
`;
