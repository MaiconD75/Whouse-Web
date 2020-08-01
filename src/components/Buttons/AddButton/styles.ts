import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3b9520;
  position: fixed;
  top: 100%;
  left: 50%;
  font-size: 32px;
  transform: translate(-50%, -70%);
  height: 64px;
  width: 64px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 12px #3295203f;
  transition: 250ms;
  margin: 0 auto;

  &:hover {
    transform: translate(-50%, -90%);
  }
`;
