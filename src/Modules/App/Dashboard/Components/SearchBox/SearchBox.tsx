import React, { useContext } from 'react';
import { Input, AutoComplete } from 'antd';
import { AppContext } from 'context/AppProvider';

interface Props {}

const SearchBox: React.FunctionComponent<Props> = () => {
  const { searchLocation, locations, searching } = useContext(AppContext);

  const onSearch = (query: string) => {
    searchLocation(query);
  };
  const onSelect = (item: any) => {
    console.log(item);
  };

  return (
    <div>
      <h2>Search for location:</h2>
      <AutoComplete
        options={locations.map(location => ({ value: location.woeid, title: location.title }))}
        style={{ width: 400 }}
        onSelect={onSelect}
        showSearch
        onSearch={onSearch}
        placeholder="Search for city, country name"
        notFoundContent={searching ? 'Searching...' : 'No location found!'}
      />

      {/* <Input.Search placeholder="Search for city, country name" style={{ maxWidth: 400 }} /> */}
    </div>
  );
};

export default SearchBox;
