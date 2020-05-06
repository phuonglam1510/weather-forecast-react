import React from 'react';
import { Col, Row } from 'antd';

import './WeatherList.scss';
import WeatherCard from '../WeatherCard/WeatherCard';

interface Props {}

const WeatherList: React.FunctionComponent<Props> = () => {
  return (
    <div className="WeatherList">
      <Row gutter={[20, 20]}>
        <Col xs={24} md={6}>
          <WeatherCard />
        </Col>
        <Col xs={24} md={6}>
          <WeatherCard />
        </Col>
        <Col xs={24} md={6}>
          <WeatherCard />
        </Col>
        <Col xs={24} md={6}>
          <WeatherCard />
        </Col>
      </Row>
    </div>
  );
};

export default WeatherList;
