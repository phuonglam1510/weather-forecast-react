import React, { createContext, useState } from 'react';
import { message } from 'antd';
import { Location, Sample } from 'Types';
import SampleService from 'Services/SampleService';

type AppContextProps = {
  loading: boolean;
  errorMessage: string;
  items: Sample[];
  [key: string]: any;
};

export const AppContext = createContext<AppContextProps>({
  errorMessage: '',
  items: [],
  loading: false,
});

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [errorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Sample[]>([]);
  const service = new SampleService();

  const loadItems = async () => {
    try {
      setLoading(true);
      // const result = await service.load(currentLocation.woeid);
      setItems([new Sample({ id: 1, name: 'Phuong' })]);
    } catch (error) {
      message.error(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  const value: AppContextProps = {
    errorMessage,
    loadItems,
    loading,
    items,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
