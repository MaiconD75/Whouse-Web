import React, { useCallback, ChangeEvent } from 'react';
import { FiCamera } from 'react-icons/fi';

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
import api from '../../services/api';

interface IProductsListProps {
  productList: [IProductData] | undefined;
}

const ProductList: React.FC<IProductsListProps> = ({ productList }) => {
  const { changeFormOpenState, UpdateImage } = useForm();

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      if (e.target.files) {
        const imgName = e.target.files[0].name;
        const data = new FormData();

        data.append('image', e.target.files[0]);

        api.patch(`products/${id}`, data).then(() => {
          UpdateImage(imgName);
        });
      }
    },
    [UpdateImage],
  );

  return (
    <ListContainer>
      {productList?.map((p: IProductData) => (
        <ProductItem key={p.id}>
          <ImgContainer>
            {p.product_image && <img alt={p.name} src={p.product_image} />}
            <label htmlFor={p.id}>
              <FiCamera />

              <input
                type="file"
                id={p.id}
                accept=".jpeg, .jpg, .png"
                onChange={e => handleImageChange(e, p.id)}
              />
            </label>
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
              Editar
            </EditButton>
          </EditContainer>
        </ProductItem>
      ))}
    </ListContainer>
  );
};

export default ProductList;
