import express from 'express';

import getCurrentWeather from '../service/openweathermap';

const router = express.Router();

router.get('/currentWeather', (req, res) => {
  const { cityName } = req.query;
  getCurrentWeather(cityName)
    .then(response => res.json(response))
    .catch(error => res.json({ error }));
});

export default router;
