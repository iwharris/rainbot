import { createServer } from 'http';

import createApp from './app';

const app = createApp();
const port = process.env.PORT || 3000;
const server = createServer(app);

server.listen(port);
