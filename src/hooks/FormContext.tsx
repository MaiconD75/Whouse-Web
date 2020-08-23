import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

import IItemData from '../utils/interfaces/IItemData';
import IProductData from '../utils/interfaces/IProductData';

interface ISaveCreditials {
  itemType: string;
  data: Record<string, unknown>;
  id?: string;
}

interface IFormContextData {
  newItem: Record<string, unknown>;
  initialData: IItemData | IProductData | undefined;
  formIsOpen: boolean;
  saveItem(credentials: ISaveCreditials): Promise<void>;
  changeFormOpenState(initialData?: IItemData | IProductData | undefined): void;
}

const FormContext = createContext<IFormContextData>({} as IFormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [savedItem, setSavedItem] = useState({});
  const [formOpen, setFormOpen] = useState(false);
  const [toEditData, setToEditData] = useState<IItemData | IProductData>();

  const saveItem = useCallback(async ({ itemType, data, id }) => {
    if (!id) {
      await api.post(itemType, data);
    } else {
      await api.put(itemType, { ...data, id });
    }
    setSavedItem(data);
  }, []);

  const changeFormOpenState = useCallback(
    (initialData: IItemData | IProductData | undefined) => {
      setFormOpen(!formOpen);

      if (initialData) {
        setToEditData(initialData);
      }
    },
    [formOpen],
  );

  return (
    <FormContext.Provider
      value={{
        newItem: savedItem,
        saveItem,
        formIsOpen: formOpen,
        changeFormOpenState,
        initialData: toEditData,
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
