import { HTTPTransport } from 'utils/classes';
import { URLS, HEADERS } from 'utils/constants';

describe('utils/HTTPTransport', () => {
  const http = new HTTPTransport();

  describe('auth', () => {
    it('should return error by return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).catch((err) => {
        const textError = JSON.parse(err.responseText).reason;
        expect(textError).toEqual('Cookie is not valid');
      });
    });

    it('should return OK by login', async () => {
      await http
        .post(`${URLS.BASE}/auth/signin`, {
          headers: HEADERS.CT_APPLICATION_JSON,
          data: { login: 'as1211516dasd', password: 'asdasdasdasd' },
        })
        .then((data: any) => expect(data.responseText).toEqual('OK'));
    });

    it('should return error by login', async () => {
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

    it('should return user info', async () => {
      await http.get(`${URLS.BASE}/auth/user`, {}).then((userInfo: any) => {
        const user = {
          id: 52802,
          first_name: 'Sasda124sd',
          second_name: 'asdasdASDasdasdASD',
          display_name: 'asdasdasdasd1',
          login: 'as1211516dasd',
          avatar:
            '/78cf0d70-5ddf-448d-a98d-e3dbca94cead/deb492ce-90c2-45ed-a33f-aacafaf24715_scale_1200.webp',
          email: 'qwmasde@gmail.com',
          phone: '+79609516683',
        };

        expect(JSON.parse(userInfo.responseText)).toMatchObject(user);
      });
    });
  });
});
