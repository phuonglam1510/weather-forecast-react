import React from 'react';

import './CurrentLocation.scss';
import { AppContext } from 'context/AppProvider';

interface Props {}

const CurrentLocation: React.FunctionComponent<Props> = () => {
  const { currentLocation } = React.useContext(AppContext);

  return (
    <div className="CurrentLocation">
      <h2>City: {currentLocation.title}</h2>
      {currentLocation.parent && <h3>{currentLocation.parent.title}</h3>}
      <div>Today: {currentLocation.today}</div>
      <div>Sunrise: {currentLocation.sunriseTime}</div>
      <div>Sunset: {currentLocation.sunsetTime}</div>
    </div>
  );
};

export default CurrentLocation;
