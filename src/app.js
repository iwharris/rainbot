import express from 'express';
import config from 'config';
import logger from 'morgan';

import indexRouter from './routes/index';

export default function createApp() {
  const app = express();

  // Middleware
  app.use(logger(config.get('morgan')));
  app.use(express.json(config.get('express.json')));

  // Routes
  app.use('/', indexRouter);

  // Catch unmatched routes and forward to error handler
  app.use((req, res, next) => next(new Error('Not found')));

  // Catch-all error handler
  app.use((err, req, res) => {
    res.status(err.status || 500);
    return res.json(err);
  });

  return app;
}
