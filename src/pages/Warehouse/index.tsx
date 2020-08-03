import React, { useState, useEffect } from 'react';

import List from '../../components/List';
import AddButton from '../../components/Buttons/AddButton';
import api from '../../services/api';
import IItemDataDTO from '../../DTOs/IItemDataDTO';

const Warehouse: React.FC = () => {
  const [warehousesList, setWarehousesList] = useState<[IItemDataDTO]>();

  useEffect(() => {
    async function loadWarehouses() {
      const response = await api.get('warehouses');

      const data = response.data.map((warehouse: IItemDataDTO) => ({
        id: warehouse.id,
        name: warehouse.name,
        description: warehouse.description,
      }));

      setWarehousesList(data);
    }

    loadWarehouses();
  }, []);

  return (
    <>
      <List itemList={warehousesList} URLLink="stocks" />
      <AddButton>+</AddButton>
    </>
  );
};

export default Warehouse;
