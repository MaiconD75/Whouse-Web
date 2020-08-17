import React from 'react';

import {
  Container,
  ProductItem,
  TextContent,
  Amount,
  SaveButton,
  EditContainer,
} from './styles';

import AddButton from '../../components/Buttons/AddButton';
import ListContainer from '../../components/ListContainer';

const Product: React.FC = () => {
  return (
    <Container>
      <ListContainer>
        <ProductItem>
          {' '}
          <img
            alt="resistor"
            src="https://www.baudaeletronica.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/f/cfr-25jb-10k.jpg"
          />
          <TextContent>
            <strong>Resitor 10 </strong>
            <span>Resistor de 10kOhm </span>
          </TextContent>
          <EditContainer>
            <Amount>
              <button type="button">+</button>
              <input value="1000" />
              <button type="button">-</button>
            </Amount>
            <SaveButton>save</SaveButton>
          </EditContainer>
        </ProductItem>
        <ProductItem>
          {' '}
          <img
            alt="resistor"
            src="https://www.baudaeletronica.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/f/cfr-25jb-10k.jpg"
          />
          <TextContent>
            <strong>Resitor 10</strong>
            <span>Resistor de 10kOhm</span>
          </TextContent>
          <EditContainer>
            <Amount>
              <button type="button">+</button>
              <input value="5" />
              <button type="button">-</button>
            </Amount>
            <SaveButton>save</SaveButton>
          </EditContainer>
        </ProductItem>
        <ProductItem>
          {' '}
          <img
            alt="resistor"
            src="https://www.baudaeletronica.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/f/cfr-25jb-10k.jpg"
          />
          <TextContent>
            <strong>Resitor 10</strong>
            <span>Resistor de 10kOhm</span>
          </TextContent>
          <EditContainer>
            <Amount>
              <button type="button">+</button>
              <input value="5" />
              <button type="button">-</button>
            </Amount>
            <SaveButton>save</SaveButton>
          </EditContainer>
        </ProductItem>
      </ListContainer>
      <AddButton>+</AddButton>
    </Container>
  );
};

export default Product;
