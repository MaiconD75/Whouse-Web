import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

interface Props {
  name: string;
}

type IInputProps = JSX.IntrinsicElements['input'] & Props;

const AmountInput: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer isError={!!error}>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputContainer>
  );
};

export default AmountInput;
