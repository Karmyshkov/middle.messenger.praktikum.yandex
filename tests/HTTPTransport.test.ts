import { HTTPTransport } from 'utils/classes';
import { URLS, HEADERS } from 'utils/constants';

describe('utils/HTTPTransport', () => {
  it('should signin in app', () => {
    const http = new HTTPTransport();

    // http.post(`${URLS.BASE}/auth/signin`, {
    //   headers: HEADERS.CT_APPLICATION_JSON,
    //   data: { login: 'string', password: 'string' },
    // });

    http
      .get('https://ya-praktikum.tech/api/v2/auth/user')
      .catch((err) => console.log(err));

    // http
    //   .post(`https://ya-praktikum.tech/api/v2/auth/signin`, {
    //     headers: HEADERS.CT_APPLICATION_JSON,
    //     data: JSON.stringify({ login: 'string', password: 'string' }),
    //   })
    //   .catch((err) => console.log(err));
  });
});
