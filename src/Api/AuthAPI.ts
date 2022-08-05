import { BaseAPI } from './BaseAPI';
import { SignupType, SigninType } from 'types';

class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }

  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    return this.post('signup', {
      email,
      login,
      first_name,
      second_name,
      phone,
      password,
    });
  }

  public signin({ login, password }: SigninType) {
    return this.post('signin', {
      login,
      password,
    });
  }
  public signout() {
    return this.post('logout', {});
  }

  public getInfo() {
    return this.get('user');
  }
}

export default new AuthAPI();
