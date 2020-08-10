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

interface Props {
  itemList: [IItemDataDTO] | undefined;
  URLLink?: string;
}

const List: React.FC<Props> = ({ itemList, URLLink }) => {
  return (
    <ItemList>
      <Container>
        {itemList?.map((i: IItemDataDTO) => (
          <Item key={i.id}>
            <ItemContainer href={`http://localhost:3000/${URLLink}/${i.id}`}>
              <TextContainer>
                <strong>{i.name}</strong>
                {i.description ? <span>{i.description}</span> : null}
              </TextContainer>
              <FiChevronRight color="#EEE" fontSize={'1.4rem'} />
            </ItemContainer>
            <EditButton>
              <FiEdit3 color="#EEE" fontSize={'1.4rem'} />
            </EditButton>
          </Item>
        ))}
      </Container>
    </ItemList>
  );
};

export default List;
