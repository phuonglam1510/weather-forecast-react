import React, { createContext, useState } from 'react';
import { message } from 'antd';
import { Location, WeatherDay } from 'Types';
import WeatherService from 'Services/WeatherService';

type AppContextProps = {
  locations: Location[];
  currentLocation: Location;
  loading: boolean;
  searching: boolean;
  errorMessage: string;
  days: any[];
  searchLocation: (query: string) => any;
  selectLocation: any;
  [key: string]: any;
};

const HO_CHI_MINH = {
  title: 'Ho Chi Minh City',
  location_type: 'City',
  woeid: 1252431,
  latt_long: '10.759180,106.662498',
};

const defaultLocation = new Location(HO_CHI_MINH);

export const AppContext = createContext<AppContextProps>({
  errorMessage: '',
  locations: [],
  days: [],
  loading: false,
  searching: false,
  currentLocation: defaultLocation,
  searchLocation: () => true,
  selectLocation: () => true,
});

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [errorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [currentLocation, selectLocation] = useState<Location>(defaultLocation);
  const [locations, setLocations] = useState([]);
  const [days, setDays] = useState([]);
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

  const loadWeathers = async () => {
    try {
      setLoading(true);
      const result = await service.loadWeathers(currentLocation.woeid);
      setDays(result.consolidated_weather.map((day: any) => new WeatherDay(day)));
      selectLocation(new Location({ ...currentLocation, ...result }));
    } catch (error) {
      message.error(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  const value: AppContextProps = {
    errorMessage,
    locations,
    searchLocation,
    searching,
    selectLocation,
    currentLocation,
    loadWeathers,
    loading,
    days,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
