import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import IProductData from '../../utils/interfaces/IProductData';

import ProductList from '../../components/ProductList';
import AddButton from '../../components/Buttons/AddButton';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { useForm } from '../../hooks/FormContext';

interface IProductsParams {
  stockId: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  stock_id: Yup.string().required(),
  specification: Yup.string(),
  amount: Yup.number().required(),
});

const Product: React.FC = () => {
  const [productList, setProductList] = useState<[IProductData]>();

  const { params } = useRouteMatch<IProductsParams>();

  const { imageUpdated, deletedItem, newItem, initialProductData } = useForm();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`stocks/${params.stockId}`);

      const data = response.data.products.map((product: IProductData) => {
        const product_image = product.product_image
          ? `http://localhost:3333/files/${product.product_image}`
          : undefined;
        return {
          id: product.id,
          name: product.name,
          specification: product.specification,
          amount: product.amount,
          product_image,
        };
      });

      setProductList(data);
    }

    loadProducts();
  }, [imageUpdated, deletedItem, newItem, params.stockId]);

  return (
    <>
      <Form
        schema={schema}
        unresetContent={{
          stock_id: params.stockId,
          amount: 0,
        }}
        initialData={initialProductData}
        itemType="products"
      >
        <Input type="text" label="Nome" name="name" />
        <Input type="text" label="Especificação" name="specification" />
        <Input
          name="stock_id"
          type="hidden"
          invisible
          value={params.stockId}
          readOnly
        />
        <Input
          name="amount"
          type="hidden"
          defaultValue={
            initialProductData?.amount ? initialProductData.amount : 0
          }
          invisible
          readOnly
        />
      </Form>
      <AddButton />
      <ProductList productList={productList} />
    </>
  );
};

export default Product;
