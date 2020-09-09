import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

import IItemData from '../utils/interfaces/IItemData';
import IProductData from '../utils/interfaces/IProductData';
import { useToast } from './ToastContext';

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
  initialItemData: IItemData | undefined;
  initialProductData: IProductData | undefined;
  formIsOpen: boolean;
  deletedItem: string | undefined;
  imageUpdated: string;
  UpdateImage(id: string): void;
  saveItem(credentials: ISaveCreditials): Promise<void>;
  updateAmount(credentials: ISaveCreditials): Promise<void>;
  deleteItem(credentials: IDeleteCreditials): Promise<void>;
  changeFormOpenState(
    initialItemData?: IItemData,
    initialProductData?: IProductData,
  ): void;
}

const FormContext = createContext<IFormContextData>({} as IFormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [savedItem, setSavedItem] = useState({});
  const [itemImageUpdated, setItemImageUpdated] = useState('');
  const [deletedItem, setDeletedItem] = useState<string | undefined>('');
  const [formOpen, setFormOpen] = useState(false);
  const [toEditItemData, setToEditItemData] = useState<IItemData>();
  const [toEditProductData, setToEditProductData] = useState<IProductData>();

  const { addToast } = useToast();

  const UpdateImage = useCallback((id: string) => {
    setItemImageUpdated(id);
  }, []);

  const changeFormOpenState = useCallback(
    (initialItemData?: IItemData, initialProductData?: IProductData) => {
      setFormOpen(!formOpen);

      setToEditItemData(initialItemData);

      setToEditProductData(initialProductData);
    },
    [formOpen],
  );

  const saveItem = useCallback(
    async ({ itemType, data, id }: ISaveCreditials) => {
      try {
        if (!id) {
          await api.post(itemType, data);
        } else {
          await api.put(itemType, { ...data, id });
        }
        setSavedItem(data);

        const messageTitle = id
          ? `Atualização bem sucedida!`
          : `Cadastro concluido com sucesso!`;

        addToast({
          type: 'success',
          title: messageTitle,
        });

        changeFormOpenState();
      } catch (err) {
        const messageTitle = id ? `Erro ao atualizar!` : `Falha no cadastro!`;

        if (err.response) {
          addToast({
            type: 'error',
            title: messageTitle,
            description: err.response.data.message,
          });
        } else {
          addToast({
            type: 'error',
            title: 'Internal Server Error',
          });
        }
      }
    },
    [changeFormOpenState, addToast],
  );
  const updateAmount = useCallback(
    async ({ itemType, data, id }: ISaveCreditials) => {
      await api.put(itemType, { ...data, id });
      setSavedItem(data);
    },
    [],
  );

  const deleteItem = useCallback(
    async ({ id, itemType }: IDeleteCreditials) => {
      await api.delete(itemType, { data: { id } });
      changeFormOpenState();
      setDeletedItem(id);

      addToast({
        type: 'success',
        title: 'Item excluido!',
      });
    },
    [changeFormOpenState, addToast],
  );

  return (
    <FormContext.Provider
      value={{
        newItem: savedItem,
        saveItem,
        updateAmount,
        formIsOpen: formOpen,
        changeFormOpenState,
        initialItemData: toEditItemData,
        initialProductData: toEditProductData,
        deletedItem,
        deleteItem,
        UpdateImage,
        imageUpdated: itemImageUpdated,
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
