import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariant = {
  info: css`
    border-color: #c9a73c;
  `,
  success: css`
    border-color: #22861e;
  `,
  error: css`
    border-color: #e4091c;
  `,
};
export const Container = styled(animated.div)<IToastProps>`
  width: 320px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.textDark};
  border: 2px solid ${props => props.theme.colors.secondaryLight};
  color: ${props => props.theme.colors.textLight};

  display: flex;

  ${props => toastTypeVariant[props.type || 'info']};

  > svg {
    margin: 0.2rem 0.8rem 0 0;
  }

  div {
    flex: 1;

    p {
      color: ${props => props.theme.colors.text};
      margin-top: 4px;
      opacity: 0.8;
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1.2rem;
    opacity: 0.6;
    border: none;
    background: transparent;
    color: inherit;
  }

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
