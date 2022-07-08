import { BaseAPI } from './BaseAPI';
import { SignupType } from 'types';
import { BrowseRouter as router } from 'core';

class AuthAPI extends BaseAPI {
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
    })
      .then((response) => router.go('/'))
      .catch((error) => alert(error));
  }
}

export default new AuthAPI();
