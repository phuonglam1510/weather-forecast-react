import React from 'react';

import './WeatherCard.scss';

interface Props {}

const LoadingCard: React.FunctionComponent<Props> = () => {
  return (
    <div className="WeatherCard Loading">
      <div className="Title" />
      <div className="Text" />
    </div>
  );
};

export default LoadingCard;
