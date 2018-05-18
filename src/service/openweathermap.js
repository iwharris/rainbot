import request from 'request-promise-native';
import config from 'config';
import { getOrElse } from '../service/cache';

const { baseUrl, apiKey } = config.get('openweathermap');

const getQueryParams = (options = {}) =>
  Object.assign({
    APPID: apiKey,
  }, options);

export default async function getCurrentWeather(city) {
  return getOrElse(`weather-${city}`, () => request({
    uri: `${baseUrl}/data/2.5/weather`,
    qs: getQueryParams({ q: city }),
    json: true,
  }));
}
