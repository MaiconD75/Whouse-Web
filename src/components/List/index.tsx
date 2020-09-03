import React from 'react';

import { FiChevronRight, FiEdit3 } from 'react-icons/fi';

import { useForm } from '../../hooks/FormContext';

import { Item, ItemContainer, EditButton, TextContainer } from './styles';

import IItemData from '../../utils/interfaces/IItemData';
import ListContainer from '../ListContainer';

interface Props {
  itemList: [IItemData] | undefined;
  URLLink?: string;
}

const List: React.FC<Props> = ({ itemList, URLLink }) => {
  const { changeFormOpenState } = useForm();

  return (
    <ListContainer withoutRighPadding>
      {itemList?.map((i: IItemData) => (
        <Item key={i.id}>
          <ItemContainer href={`http://localhost:3000/${URLLink}/${i.id}`}>
            <TextContainer>
              <strong>{i.name}</strong>
              {i.description ? <span>{i.description}</span> : null}
            </TextContainer>
            <FiChevronRight color="#EEE" fontSize="1.4rem" />
          </ItemContainer>
          <EditButton type="button" onClick={() => changeFormOpenState(i)}>
            <FiEdit3 color="#EEE" fontSize="1.4rem" />
          </EditButton>
        </Item>
      ))}
    </ListContainer>
  );
};

export default List;
