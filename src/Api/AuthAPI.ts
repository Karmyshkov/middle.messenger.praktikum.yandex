import { BaseAPI } from './BaseAPI';
import { SignupType, SigninType } from 'types';

class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }

  public signup({ ...rest }: SignupType) {
    return this.post('signup', { ...rest });
  }

  public signin({ ...rest }: SigninType) {
    return this.post('signin', { ...rest });
  }
  public signout() {
    return this.post('logout', {});
  }

  public getInfo() {
    return this.get('user');
  }
}

export default new AuthAPI();
