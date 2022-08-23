import { HTTPTransport } from 'utils/classes';
import { URLS, HEADERS } from 'utils/constants';

describe('utils/HTTPTransport', () => {
  const http = new HTTPTransport();

  describe('auth', () => {
    it('should return OK', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'as1211516dasd', password: 'asdasdasdasd' },
        })
        .then((data: any) => expect(data.responseText).toEqual('OK'));
    });

    it('should return error', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'as1211516dasd', password: 'asdasdasdasd' },
        })
        .catch((err) => {
          const textError = JSON.parse(err.responseText).reason;
          expect(textError).toEqual('User already in system');
        });
    });
  });
});
