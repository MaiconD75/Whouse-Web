import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import ProductList from '../../components/ProductList';
import AddButton from '../../components/Buttons/AddButton';
import IProductData from '../../utils/interfaces/IProductData';
import api from '../../services/api';

interface IProductsParams {
  stockId: string;
}

const Product: React.FC = () => {
  const [productList, setProductList] = useState<[IProductData]>();
  const { params } = useRouteMatch<IProductsParams>();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`stocks/${params.stockId}`);

      const data = response.data.products.map((product: IProductData) => {
        const product_image = product.product_image
          ? `http://localhost:3333/files/${product.product_image}`
          : undefined;
        console.log(product_image);
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
  }, [params.stockId]);

  return (
    <>
      <ProductList productList={productList} />
      <AddButton>+</AddButton>
    </>
  );
};

export default Product;
