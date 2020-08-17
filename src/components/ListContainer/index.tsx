import React from 'react';

import { Container, IListContainerProps } from './styles';

const ListContainer: React.FC<IListContainerProps> = ({
  children,
  withoutRighPadding = false,
}) => {
  return (
    <Container withoutRighPadding={withoutRighPadding}>{children}</Container>
  );
};

export default ListContainer;
