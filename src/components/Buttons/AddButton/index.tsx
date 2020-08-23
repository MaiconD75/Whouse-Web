import React, { ButtonHTMLAttributes } from 'react';

import { useForm } from '../../../hooks/FormContext';

import { Button } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const AddButton: React.FC<IButtonProps> = () => {
  const { changeFormOpenState } = useForm();

  return (
    <Button type="button" onClick={() => changeFormOpenState(undefined)}>
      +
    </Button>
  );
};

export default AddButton;
