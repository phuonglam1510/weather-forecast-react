import React from 'react';
import './DashboardStyle.scss';
import SearchBox from './Components/SearchBox/SearchBox';
import WeatherList from './Components/WeatherList/WeatherList';

interface Props {}

const DashboardComponent: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <div className="Dashboard">
        <div className="Header">
          <h1>Weather Dashboard</h1>
        </div>
        <div className="Container">
          <SearchBox />
          <WeatherList />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
