import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { FormHandles, SubmitHandler } from '@unform/core';

import { Amount, Unform } from './styles';

import AmountInput from './AmonutInput';
import IProductData from '../../utils/interfaces/IProductData';
import { useForm } from '../../hooks/FormContext';
import getvalidationError from '../../utils/getValidationErrors';

interface IFormData {
  amount: number;
}

interface IFormProps {
  productData: IProductData;
}

const schema = Yup.object().shape({
  amount: Yup.number().required().min(0),
});

const AmountForm: React.FC<IFormProps> = ({ productData }) => {
  const formRef = useRef<FormHandles>(null);

  const { updateAmount } = useForm();

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async data => {
      if (data.amount < 0) {
        formRef.current?.setFieldValue('amount', productData.amount);
      }

      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        const id = productData?.id;

        const newData = { ...productData, amount: data.amount };

        updateAmount({ itemType: 'products', data: newData, id });
      } catch (err) {
        const errors = getvalidationError(err);
        formRef.current?.setErrors(errors);
      }
    },
    [productData, updateAmount],
  );

  const handleSubmitsForm = useCallback(() => {
    formRef.current?.submitForm();
  }, []);

  const handleChangeAmount = useCallback(
    (changeValue: number) => {
      const newValue =
        Number(formRef.current?.getFieldValue('amount')) + changeValue;
      if (newValue >= 0) {
        formRef.current?.setFieldValue('amount', newValue);
        handleSubmitsForm();
      }
    },
    [handleSubmitsForm],
  );

  return (
    <Unform
      initialData={{ amount: productData.amount }}
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <Amount>
        <button type="button" onClick={() => handleChangeAmount(1)}>
          +
        </button>
        <AmountInput
          type="number"
          name="amount"
          min={0}
          onChange={() => handleSubmitsForm()}
        />
        <button type="button" onClick={() => handleChangeAmount(-1)}>
          -
        </button>
      </Amount>
      {/* <SaveButton type="submit">
        <FiSave color="#EEE" fontSize="1rem" />
      </SaveButton> */}
    </Unform>
  );
};

export default AmountForm;
