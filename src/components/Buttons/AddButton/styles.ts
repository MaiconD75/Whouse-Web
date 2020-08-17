import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primaryDark};
  position: fixed;
  top: 100%;
  left: 50%;
  font-size: 1.6rem;
  transform: translate(-50%, -70%);
  height: 4rem;
  width: 4rem;
  border: 3px solid ${props => props.theme.colors.green};
  border-radius: 50%;
  box-shadow: 0 0.3rem 0.8rem #3295203f;
  transition: 250ms;
  margin: 0 auto;

  @media (min-width: 700px) {
    &:hover {
      transform: translate(-50%, -90%);
    }
  }
`;
