import { BaseAPI } from './BaseAPI';
import { SignupType } from 'types';

export class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    return this.post('/signup', {
      email,
      login,
      first_name,
      second_name,
      phone,
      password,
    });
  }
}
