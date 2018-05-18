import _ from 'lodash';
import express from 'express';

import getCurrentWeather from '../service/openweathermap';

const router = express.Router();

router.get('/currentWeather', (req, res) => {
  const city = _.lowerCase(req.query.city);
  return getCurrentWeather(city)
    .then(response => res.json(response));
});

export default router;
