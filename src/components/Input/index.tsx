import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputBlock } from './styles';

interface Props {
  name: string;
  label?: string;
}

type IInputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<IInputProps> = ({ name, label, ...rest }) => {
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
    <InputBlock>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {error && <span className="error">{error}</span>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputBlock>
  );
};

export default Input;
