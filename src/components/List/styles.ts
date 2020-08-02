import styled from 'styled-components';

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin: 50px 0px 50px 36px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & + div {
    margin-top: 32px;
  }
`;

export const ItemContainer = styled.a`
  background-color: #291f65;
  height: 80px;
  margin-right: 20px;
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 7px #372e6132;
  transition: 250ms;

  &:hover {
    box-shadow: -15px 15px 15px #372e6132;
    transform: translate(15px, -15px);
  }

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: #eee;
    font-size: 20px;
  }

  span {
    color: #ddd;
    font-size: 12px;
  }
`;

export const EditButton = styled.button`
  background-color: #acc026;
  width: 100px;
  border: none;
  border-radius: 48px 0 0 48px;
  box-shadow: 0 0 7px #3e481991;
  transition: 250ms;

  &:hover {
    box-shadow: -15px 15px 15px #3e481991;
    transform: translate(15px, -15px);
  }
`;
