module.exports = {
  cache: {
    ttl: 1000 * 60 * 60, // One hour
  },
  express: {
    json: {},
  },
  morgan: 'dev',
  openweathermap: {
    baseUrl: 'https://api.openweathermap.org',
    apiKey: '',
  },
};
