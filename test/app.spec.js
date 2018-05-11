import request from 'supertest';
import createApp from '../src/app';

describe('App', () => {
  let app;
  let server;

  beforeEach(() => {
    app = createApp();
    server = app.listen(app.get('port'));
  });

  afterEach((done) => {
    server.close(done);
  });

  it('responds to the health endpoint', (done) => {
    request(app).get('/health')
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.text).toBe('OK');
      })
      .then(done);
  });

  it('redirects / to /health', (done) => {
    request(app).get('/')
      .then((res) => {
        expect(res.status).toBe(302);
        expect(res.headers.location).toBe('/health');
      })
      .then(done);
  });
});
