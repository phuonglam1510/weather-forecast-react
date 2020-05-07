/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { WeatherDay } from 'Types';
import WeatherCard from './WeatherCard';

test('Snapshot Test 1: Empty day', () => {
  const emptyDay = new WeatherDay({});
  const component = renderer.create(<WeatherCard day={emptyDay} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Snapshot Test 2: Normal day', () => {
  const emptyDay = new WeatherDay({
    air_pressure: 1018.5,
    applicable_date: '2020-05-06',
    created: '2020-05-07T03:16:18.059367Z',
    humidity: 45,
    id: 5140782216380416,
    max_temp: 21.715,
    min_temp: 12.7,
    predictability: 70,
    the_temp: 24.125,
    visibility: 16.632864073808953,
    weather_state_abbr: 'lc',
    weather_state_name: 'Light Cloud',
    wind_direction: 288.16761556308336,
    wind_direction_compass: 'WNW',
    wind_speed: 5.50213065348233,
  });
  const component = renderer.create(<WeatherCard day={emptyDay} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
