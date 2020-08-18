import React from 'react';

import {
  ProductItem,
  TextContent,
  Amount,
  SaveButton,
  EditContainer,
} from './styles';

import ListContainer from '../ListContainer';
import IProductData from '../../utils/interfaces/IProductData';

interface IProductsListProps {
  productList: [IProductData] | undefined;
}

const ProductList: React.FC<IProductsListProps> = ({ productList }) => {
  return (
    <ListContainer>
      {productList?.map((p: IProductData) => (
        <ProductItem key={p.id}>
          {' '}
          <img alt={p.name} src={p.product_image} />
          <TextContent>
            <strong>{p.name}</strong>
            <span>{p.specification}</span>
          </TextContent>
          <EditContainer>
            <Amount>
              <button type="button">+</button>
              <input value={p.amount} />
              <button type="button">-</button>
            </Amount>
            <SaveButton>save</SaveButton>
          </EditContainer>
        </ProductItem>
      ))}
    </ListContainer>
  );
};

export default ProductList;
