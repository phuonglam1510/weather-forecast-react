import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { AppContext } from 'context/AppProvider';
import _ from 'lodash';

import './WeatherList.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import LoadingCard from '../WeatherCard/LoadingCard';

interface Props {}

const WeatherList: React.FunctionComponent<Props> = () => {
  const { days, loadWeathers, currentLocation, loading } = React.useContext(AppContext);

  useEffect(() => {
    if (currentLocation && currentLocation.woeid) {
      loadWeathers();
    }
  }, [currentLocation.woeid]);

  return (
    <div className="WeatherList">
      <Row gutter={[20, 20]}>
        {loading &&
          _.range(0, 6).map((item: any) => (
            <Col key={item} xs={24} md={4}>
              <LoadingCard />
            </Col>
          ))}
        {!loading &&
          days.map((day: any) => (
            <Col xs={24} md={4}>
              <WeatherCard day={day} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default WeatherList;
