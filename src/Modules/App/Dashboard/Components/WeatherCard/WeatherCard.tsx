import React from 'react';

import './WeatherCard.scss';

interface Props {}

const WeatherCard: React.FunctionComponent<Props> = () => {
  return (
    <div className="WeatherCard">
      <div>Nghệ sỹ</div>
      <h3>20</h3>
    </div>
  );
};

export default WeatherCard;
