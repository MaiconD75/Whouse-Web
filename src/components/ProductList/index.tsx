import React from 'react';

import {
  ProductItem,
  ImgContainer,
  TextContent,
  EditContainer,
  EditButton,
} from './styles';

import ListContainer from '../ListContainer';
import IProductData from '../../utils/interfaces/IProductData';
import { useForm } from '../../hooks/FormContext';
import AmountForm from '../AmountForm';

interface IProductsListProps {
  productList: [IProductData] | undefined;
}

const ProductList: React.FC<IProductsListProps> = ({ productList }) => {
  const { changeFormOpenState } = useForm();

  return (
    <ListContainer>
      {productList?.map((p: IProductData) => (
        <ProductItem key={p.id}>
          {' '}
          <ImgContainer>
            {p.product_image && <img alt={p.name} src={p.product_image} />}
          </ImgContainer>
          <TextContent>
            <strong>{p.name}</strong>
            <span>{p.specification}</span>
          </TextContent>
          <EditContainer>
            <AmountForm productData={p} />
            <EditButton
              type="button"
              onClick={() => changeFormOpenState(undefined, p)}
            >
              editar
            </EditButton>
          </EditContainer>
        </ProductItem>
      ))}
    </ListContainer>
  );
};

export default ProductList;
