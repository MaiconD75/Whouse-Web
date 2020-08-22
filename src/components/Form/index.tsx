import React, { useRef, useState, useCallback } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import { Unform, UnformModal, InputContainer } from './styles';

import api from '../../services/api';

import AddButton from '../Buttons/AddButton';
import getvalidationError from '../../utils/getValidationErrors';

interface IFormData {
  name: string;
  description?: string;
}

interface IFormProps {
  schema: Yup.ObjectSchema<
    Yup.Shape<Record<string, unknown> | undefined, Record<string, unknown>>
  >;
}

const Form: React.FC<IFormProps> = ({ children, schema }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('warehouses', data);

        reset();
      } catch (err) {
        const errors = getvalidationError(err);

        formRef.current?.setErrors(errors);
      }
    },
    [schema],
  );

  const ChangeOpenForm = () => {
    setFormIsOpen(!formIsOpen);
  };

  return (
    <>
      <UnformModal disableScrollLock open={formIsOpen} onClose={ChangeOpenForm}>
        <div>
          <Unform autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <InputContainer>{children}</InputContainer>

            <button type="submit">Cadastrar</button>
          </Unform>
        </div>
      </UnformModal>
      <AddButton onClick={ChangeOpenForm}>+</AddButton>
    </>
  );
};

export default Form;
