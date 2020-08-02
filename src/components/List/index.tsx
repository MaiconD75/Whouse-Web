import React from 'react';

import { FiChevronRight, FiEdit3 } from 'react-icons/fi';

import {
  Container,
  ItemList,
  Item,
  ItemContainer,
  EditButton,
  TextContainer,
} from './styles';
import IItemDataDTO from '../../DTOs/IItemDataDTO';

interface IItemRequest {
  itemList: [IItemDataDTO] | undefined;
}

const List: React.FC<IItemRequest> = ({ itemList }) => {
  return (
    <ItemList>
      <Container>
        {itemList?.map((i: IItemDataDTO) => (
          <Item key={i.id}>
            <ItemContainer>
              <TextContainer>
                <strong>{i.name}</strong>
                {i.description ? <span>{i.description}</span> : null}
              </TextContainer>
              <FiChevronRight color="#EEE" fontSize={30} />
            </ItemContainer>
            <EditButton>
              <FiEdit3 color="#EEE" fontSize={30} />
            </EditButton>
          </Item>
        ))}
      </Container>
    </ItemList>
  );
};

export default List;
