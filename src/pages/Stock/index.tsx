import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import List from '../../components/List';
import AddButton from '../../components/Buttons/AddButton';
import IItemDataDTO from '../../DTOs/IItemDataDTO';
import api from '../../services/api';

interface IStockParams {
  warehouseId: string;
}

const Stock: React.FC = () => {
  const [stocksList, setStocksList] = useState<[IItemDataDTO]>();
  const { params } = useRouteMatch<IStockParams>();

  useEffect(() => {
    async function loadStocks() {
      const response = await api.get(`warehouses/${params.warehouseId}`);

      const data = response.data.stocks.map((stock: IItemDataDTO) => ({
        id: stock.id,
        name: stock.name,
      }));

      setStocksList(data);
    }

    loadStocks();
  }, [params.warehouseId]);

  return (
    <>
      <List itemList={stocksList} />
      <AddButton>+</AddButton>
    </>
  );
};

export default Stock;
