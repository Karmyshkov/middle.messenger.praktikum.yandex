import { BaseAPI } from './BaseAPI';
import { SignupType, SigninType } from 'types';

class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }

  public signup({ ...rest }: SignupType) {
    return this.post('signup', { ...rest });
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
