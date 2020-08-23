import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

import IItemData from '../utils/interfaces/IItemData';
import IProductData from '../utils/interfaces/IProductData';

interface ISaveCreditials {
  itemType: string;
  data: Record<string, unknown>;
  id?: string;
}

interface IDeleteCreditials {
  itemType: string;
  id?: string;
}

interface IFormContextData {
  newItem: Record<string, unknown>;
  initialData: IItemData | IProductData | undefined;
  formIsOpen: boolean;
  deletedItem: string | undefined;
  saveItem(credentials: ISaveCreditials): Promise<void>;
  deleteItem(credentials: IDeleteCreditials): Promise<void>;
  changeFormOpenState(initialData?: IItemData | IProductData | undefined): void;
}

const FormContext = createContext<IFormContextData>({} as IFormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [savedItem, setSavedItem] = useState({});
  const [deletedItem, setDeletedItem] = useState<string | undefined>('');
  const [formOpen, setFormOpen] = useState(false);
  const [toEditData, setToEditData] = useState<IItemData | IProductData>();

  const saveItem = useCallback(
    async ({ itemType, data, id }: ISaveCreditials) => {
      if (!id) {
        await api.post(itemType, data);
      } else {
        await api.put(itemType, { ...data, id });
      }
      setSavedItem(data);
    },
    [],
  );

  const changeFormOpenState = useCallback(
    (initialData?: IItemData | IProductData | undefined) => {
      setFormOpen(!formOpen);

      setToEditData(initialData);
    },
    [formOpen],
  );

  const deleteItem = useCallback(
    async ({ id, itemType }: IDeleteCreditials) => {
      await api.delete(itemType, { data: { id } });
      changeFormOpenState();
      setDeletedItem(id);
    },
    [changeFormOpenState],
  );

  return (
    <FormContext.Provider
      value={{
        newItem: savedItem,
        saveItem,
        formIsOpen: formOpen,
        changeFormOpenState,
        initialData: toEditData,
        deletedItem,
        deleteItem,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useForm(): IFormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  return context;
}

export { FormProvider, useForm };
