import express from 'express';
import config from 'config';
import logger from 'morgan';

import indexRouter from './routes/index';
import apiRouter from './routes/api-v1';

export default function createApp() {
  const app = express();

  // Middleware
  app.use(logger(config.get('morgan')));
  app.use(express.json(config.get('express.json')));

  // Routes
  app.use('/', indexRouter);
  app.use('/api/v1', apiRouter);

  // Catch unmatched routes and forward to error handler
  app.use((req, res, next) => next(new Error('Not found')));

  // Catch-all error handler
  app.use((err, req, res) => {
    res.status(err.status || 500);
    return res.json(err);
  });

  return app;
}
