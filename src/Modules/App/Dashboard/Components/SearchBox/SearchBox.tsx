import React, { useContext } from 'react';
import { AutoComplete } from 'antd';
import { AppContext } from 'context/AppProvider';

interface Props {}

const SearchBox: React.FunctionComponent<Props> = () => {
  const { searchLocation, locations, searching, selectLocation } = useContext(AppContext);

  const onSearch = (query: string) => {
    searchLocation(query);
  };
  const onSelect = (item: string, { id }: any) => {
    selectLocation(locations.find(l => l.woeid === id));
  };

  return (
    <div>
      <h2>Search for location:</h2>
      <AutoComplete
        options={locations.map(location => ({
          value: location.title,
          label: location.title,
          id: location.woeid,
        }))}
        style={{ width: 400 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Search for city, country name"
        notFoundContent={searching ? 'Searching...' : 'No location found!'}
      />
    </div>
  );
};

export default SearchBox;
