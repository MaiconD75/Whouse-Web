import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as Yup from 'yup';

import IItemData from '../../utils/interfaces/IItemData';
import api from '../../services/api';

import AddButton from '../../components/Buttons/AddButton';
import Form from '../../components/Form';
import Input from '../../components/Input';
import List from '../../components/List';
import { useForm } from '../../hooks/FormContext';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  warehouse_id: Yup.string().required(),
});

interface IStockParams {
  warehouseId: string;
}

const Stock: React.FC = () => {
  const [stocksList, setStocksList] = useState<[IItemData]>();

  const { params } = useRouteMatch<IStockParams>();

  const { newItem, initialItemData, deletedItem } = useForm();

  useEffect(() => {
    async function loadStocks() {
      const response = await api.get(`warehouses/${params.warehouseId}`);

      const data = response.data.stocks.map((stock: IItemData) => ({
        id: stock.id,
        name: stock.name,
      }));

      setStocksList(data);
    }

    loadStocks();
  }, [params.warehouseId, newItem, deletedItem]);

  return (
    <>
      <Form
        itemType="stocks"
        unresetContent={{ warehouse_id: params.warehouseId }}
        initialData={initialItemData}
        schema={schema}
      >
        <Input name="name" type="text" label="Nome" />
        <Input
          name="warehouse_id"
          type="hidden"
          value={params.warehouseId}
          invisible
          readOnly
        />
      </Form>
      <AddButton>+</AddButton>
      <List URLLink="products" itemList={stocksList} />
    </>
  );
};

export default Stock;
