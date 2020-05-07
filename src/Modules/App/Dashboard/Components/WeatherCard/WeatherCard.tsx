import React from 'react';

import './WeatherCard.scss';
import { WeatherDay } from 'Types';

interface Props {
  day: WeatherDay;
}

const WeatherCard: React.FunctionComponent<Props> = ({ day }) => {
  return (
    <div className="WeatherCard">
      <h3 className={day.isToday ? 'Today' : ''}>{day.dayName}</h3>
      <img src={day.icon} alt="day icon" />
      <div className="Name">{day.weather_state_name} </div>
      <div className="Temp">
        <span>{day.maxTemperature} </span>
        <span>{day.minTemperature}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
