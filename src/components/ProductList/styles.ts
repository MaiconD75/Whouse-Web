import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const ProductItem = styled.li`
  border: 3px solid ${props => props.theme.colors.primaryLight};
  background-color: ${props => props.theme.colors.primaryDark};
  height: 5.4rem;
  padding: 0.4rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5rem #372e6132;
  transition: 250ms;

  & + li {
    margin-top: 0.8rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 1.6rem;
    }
  }
`;

export const ImgContainer = styled.div`
  border: 2px solid ${props => props.theme.colors.primary};
  width: 4rem;
  height: 4rem;
  border-radius: 1.4rem;
  display: flex;
  position: relative;

  label {
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondaryDark};
    border-radius: 0.7rem;
    position: absolute;
    left: -4px;
    top: -4px;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }

    input {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.4rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-self: start;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;

  & > span,
  & > strong {
    padding: 0 0.2rem;
    flex: 1;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.6rem;
    height: 50%;
    white-space: nowrap;
  }

  strong {
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
  }

  span {
    color: ${props => props.theme.colors.textDark};
    font-size: 0.6rem;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EditButton = styled.button`
  padding: 0 0.2rem;
  margin-left: 0.2rem;
  height: 1.6rem;
  display: flex;
  align-content: center;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.textLight};
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
`;
