import React from 'react';

import './WeatherCard.scss';
import { WeatherDay } from 'Types';

interface Props {
  day: WeatherDay;
}

const WeatherCard: React.FunctionComponent<Props> = ({ day }) => {
  return (
    <div className="WeatherCard">
      <img src={} />
      <h3>{day.applicable_date}</h3>
      <div>Min {day.min_temp}</div>
      <div>Max {day.max_temp}</div>
    </div>
  );
};

export default WeatherCard;
