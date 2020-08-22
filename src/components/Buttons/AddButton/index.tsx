import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const AddButton: React.FC<IButtonProps> = props => {
  return (
    <Button type="button" {...props}>
      +
    </Button>
  );
};

export default AddButton;
