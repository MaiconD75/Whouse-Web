import React from 'react';

import List from '../../components/List';
import AddButton from '../../components/Buttons/AddButton';

const warehouseData = {
  name: 'Almoxarifado EMP.: A',
  description: 'Almoxarifado da empresa A ',
};

const Warehouse: React.FC = () => (
  <>
    <List itemData={warehouseData} />
    <AddButton>+</AddButton>
  </>
);

export default Warehouse;
