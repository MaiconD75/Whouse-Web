import React, { useRef, useCallback } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import { Unform, UnformModal, InputContainer } from './styles';

import { useForm } from '../../hooks/FormContext';

import getvalidationError from '../../utils/getValidationErrors';
import IItemData from '../../utils/interfaces/IItemData';
import IProductData from '../../utils/interfaces/IProductData';

interface IFormProps {
  itemType: string;
  initialData?: IItemData | IProductData;
  schema: Yup.ObjectSchema<
    Yup.Shape<Record<string, unknown> | undefined, Record<string, unknown>>
  >;
}

const Form: React.FC<IFormProps> = ({
  children,
  schema,
  itemType,
  initialData,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { saveItem, formIsOpen, changeFormOpenState } = useForm();

  const handleSubmit: SubmitHandler<Record<string, unknown>> = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        const id = initialData?.id;

        saveItem({ itemType, data, id });

        if (!initialData) {
          reset();
        }
      } catch (err) {
        const errors = getvalidationError(err);

        formRef.current?.setErrors(errors);
      }
    },
    [schema, saveItem, itemType, initialData],
  );
  return (
    <>
      <UnformModal
        disableScrollLock
        open={formIsOpen}
        onClose={() => changeFormOpenState()}
      >
        <div>
          <Unform
            autoComplete="off"
            initialData={initialData}
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <InputContainer>{children}</InputContainer>

            <button type="submit">Cadastrar</button>
          </Unform>
        </div>
      </UnformModal>
    </>
  );
};

export default Form;
