import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primaryDark};
  font-size: 1.6rem;
  margin-top: -1.2rem;
  height: 4rem;
  width: 4rem;
  color: ${props => props.theme.colors.textLight};
  border: 2px solid ${props => props.theme.colors.green};
  border-radius: 50%;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      transform: translateY(-0.2rem);
    }
  }
`;
