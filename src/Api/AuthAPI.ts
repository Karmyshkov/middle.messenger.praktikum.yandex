import { BaseAPI } from './BaseAPI';
import { SignupType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, getMessageFromResponse } from 'utils';
import { SUCCESS_SIGNUP_MESSAGE } from 'utils/constants';

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
      .then(() => {
        router.go('/');
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
      })
      .catch((err) => {
        showTooltip({
          text: getMessageFromResponse(err.responseText) as string,
          type: 'error',
        });
      });
  }
}

export default new AuthAPI();
