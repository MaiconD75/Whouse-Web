import React, { useState, useEffect } from 'react';

import List from '../../components/List';
import AddButton from '../../components/Buttons/AddButton';
import api from '../../services/api';
import IItemDataDTO from '../../DTOs/IItemDataDTO';

interface IWarehouseData {
  warehouseItem: IItemDataDTO;
}

const Warehouse: React.FC = () => {
  const [warehousesData, setWarehousesData] = useState<[IItemDataDTO]>();

  useEffect(() => {
    async function loadWarehouses() {
      const response = await api.get('warehouses');

      const data = response.data.map((warehouse: IItemDataDTO) => ({
        id: warehouse.id,
        name: warehouse.name,
        description: warehouse.description,
      }));

      setWarehousesData(data);
    }

    loadWarehouses();
  }, []);

  return (
    <>
      <List itemList={warehousesData} />
      <AddButton>+</AddButton>
    </>
  );
};

export default Warehouse;
