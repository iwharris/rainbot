import request from 'request-promise-native';
import config from 'config';

const { baseUrl, apiKey } = config.get('openweathermap');

const getQueryParams = (options = {}) =>
  Object.assign({
    APPID: apiKey,
  }, options);

export default function getCurrentWeather(cityName) {
  return request({
    uri: `${baseUrl}/data/2.5/weather`,
    qs: getQueryParams({ q: cityName }),
    json: true,
  });
}
