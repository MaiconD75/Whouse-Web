import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface ISaveCreditials {
  itemType: string;
  data: Record<string, unknown>;
}

interface IFormContextData {
  newItem: Record<string, unknown>;
  formIsOpen: boolean;
  saveItem(credentials: ISaveCreditials): Promise<void>;
  changeFormOpenState(): void;
}

const FormContext = createContext<IFormContextData>({} as IFormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [savedItem, setSavedItem] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  const saveItem = useCallback(async ({ itemType, data }) => {
    await api.post(itemType, data);
    setSavedItem(data);
  }, []);

  const changeFormOpenState = useCallback(() => {
    setFormOpen(!formOpen);
  }, [formOpen]);

  return (
    <FormContext.Provider
      value={{
        newItem: savedItem,
        saveItem,
        formIsOpen: formOpen,
        changeFormOpenState,
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
