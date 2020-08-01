import React from 'react';

import List from '../../components/List';
import AddButton from '../../components/Buttons/AddButton';

const stockData = {
  name: 'Sotck de eletrônicos',
  description: 'Stock de todos os componentes eletrônicos da empresa',
};

const Stock: React.FC = () => (
  <>
    <List itemData={stockData} />
    <AddButton>+</AddButton>
  </>
);

export default Stock;
