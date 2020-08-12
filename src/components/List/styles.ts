import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  flex: 1;
  padding: 1rem;
  padding-right: 0;

  @media (min-width: 700px) {
    padding: 2rem;
    padding-right: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  overflow: none;
  flex-direction: row;
  justify-content: space-between;

  & + div {
    margin-top: 0.8rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 1.6rem;
    }
  }
`;

export const ItemContainer = styled.a`
  background-color: #291f65;
  height: 5.4rem;
  margin-right: 0.8rem;
  width: 75vw;
  padding: 0.8rem;
  border-radius: 0.8rem;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5rem #372e6132;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      box-shadow: -1rem 1rem 1rem #372e6132;
      transform: translate(1rem, -1rem);
    }
    margin-right: 1.2rem;
    padding: 1rem;
    max-width: 85%;
  }

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  max-width: 75%;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: #eee;
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50%;
    white-space: nowrap;
  }

  span {
    color: #acb;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 1.6rem;
    height: 50%;
    white-space: nowrap;
  }
`;

export const EditButton = styled.button`
  background-color: #acc026;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3rem 0 0 3rem;
  box-shadow: 0 0 0.5rem #3e481991;
  transition: 250ms;

  @media (min-width: 700px) {
    &:hover {
      box-shadow: -1rem 1rem 1rem #3e481991;
      transform: translate(1rem, -1rem);
    }
  }
`;
