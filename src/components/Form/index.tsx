import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import {
  Unform,
  UnformModal,
  InputContainer,
  ButtonContainer,
  DeleteButton,
} from './styles';

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
  const [editForm, setEditForm] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { saveItem, formIsOpen, changeFormOpenState, deleteItem } = useForm();

  useEffect(() => {
    if (initialData) {
      setEditForm(true);
    } else {
      setEditForm(false);
    }
  }, [initialData]);

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

            <ButtonContainer>
              <button type="submit">Salvar</button>
              {editForm && (
                <DeleteButton
                  type="button"
                  onClick={() => deleteItem({ id: initialData?.id, itemType })}
                >
                  Deletar
                </DeleteButton>
              )}
            </ButtonContainer>
          </Unform>
        </div>
      </UnformModal>
    </>
  );
};

export default Form;
