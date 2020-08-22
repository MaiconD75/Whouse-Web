import React, { useRef, useCallback } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import { Unform, UnformModal, InputContainer } from './styles';

import { useForm } from '../../hooks/FormContext';

import getvalidationError from '../../utils/getValidationErrors';

interface IFormProps {
  itemType: string;
  schema: Yup.ObjectSchema<
    Yup.Shape<Record<string, unknown> | undefined, Record<string, unknown>>
  >;
}

const Form: React.FC<IFormProps> = ({ children, schema, itemType }) => {
  const formRef = useRef<FormHandles>(null);

  const { saveItem, formIsOpen, changeFormOpenState } = useForm();

  const handleSubmit: SubmitHandler<Record<string, unknown>> = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        saveItem({ itemType, data });

        reset();
      } catch (err) {
        const errors = getvalidationError(err);

        formRef.current?.setErrors(errors);
      }
    },
    [schema, saveItem, itemType],
  );

  return (
    <>
      <UnformModal
        disableScrollLock
        open={formIsOpen}
        onClose={changeFormOpenState}
      >
        <div>
          <Unform autoComplete="off" onSubmit={handleSubmit} ref={formRef}>
            <InputContainer>{children}</InputContainer>

            <button type="submit">Cadastrar</button>
          </Unform>
        </div>
      </UnformModal>
    </>
  );
};

export default Form;
