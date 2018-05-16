import express from 'express';
import weatherApi from './weather';

const router = express.Router();

router.use(weatherApi);

export default router;
