import React, { createContext, useState } from 'react';
import { message } from 'antd';
import { Location } from 'Types/Location';
import WeatherService from 'Services/WeatherService';

type AppContextProps = {
  locations: Location[];
  searching: boolean;
  errorMessage: string;
  searchLocation: (query: string) => any;
};

export const AppContext = createContext<AppContextProps>({
  errorMessage: '',
  locations: [],
  searching: false,
  searchLocation: () => true,
});

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [searching, setSearching] = useState(false);
  const [locations, setLocations] = useState([]);
  const service = new WeatherService();

  const searchLocation = async (query: string) => {
    try {
      setSearching(true);
      const result = await service.searchLocations(query);
      setLocations(result.map((item: any) => new Location(item)));
    } catch (error) {
      message.error(error.message || error);
    } finally {
      setSearching(false);
    }
  };

  const value: AppContextProps = {
    errorMessage,
    locations,
    searchLocation,
    searching,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
