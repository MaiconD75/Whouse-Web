import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import api from '../../services/api';
import IItemData from '../../utils/interfaces/IItemData';
import { useForm } from '../../hooks/FormContext';

import List from '../../components/List';
import Form from '../../components/Form';
import Input from '../../components/Input';
import AddButton from '../../components/Buttons/AddButton';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  description: Yup.string(),
});

const Warehouse: React.FC = () => {
  const [warehousesList, setWarehousesList] = useState<[IItemData]>();

  const { newItem, initialData, deletedItem } = useForm();

  useEffect(() => {
    async function loadWarehouses() {
      const response = await api.get('warehouses');

      const data = response.data.map((warehouse: IItemData) => ({
        id: warehouse.id,
        name: warehouse.name,
        description: warehouse.description,
      }));

      setWarehousesList(data);
    }

    loadWarehouses();
  }, [newItem, deletedItem]);

  return (
    <>
      <Form schema={schema} initialData={initialData} itemType="warehouses">
        <Input type="text" label="Nome" name="name" />
        <Input type="text" label="Descrição" name="description" />
      </Form>
      <List itemList={warehousesList} URLLink="stocks" />
      <AddButton />
    </>
  );
};

export default Warehouse;
