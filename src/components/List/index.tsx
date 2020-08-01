import React from 'react';

import { FiChevronRight, FiEdit3 } from 'react-icons/fi';

import { Container, ItemList, Item, EditButton, TextContainer } from './styles';

interface IItemRequest {
  itemData: {
    name: string;
    id?: string;
    description?: string;
  };
}

const List: React.FC<IItemRequest> = ({ itemData }) => {
  return (
    <ItemList>
      <Container>
        <Item>
          <TextContainer>
            <strong>{itemData.name}</strong>
            {itemData.description ? <span>{itemData.description}</span> : null}
          </TextContainer>
          <FiChevronRight color="#EEE" fontSize={30} />
        </Item>
        <EditButton>
          <FiEdit3 color="#EEE" fontSize={30} />
        </EditButton>
      </Container>
    </ItemList>
  );
};

export default List;
