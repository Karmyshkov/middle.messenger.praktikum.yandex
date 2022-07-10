import authAPI from 'api/AuthAPI';
import { SignupType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, getMessageFromResponse } from 'utils';
import { SUCCESS_SIGNUP_MESSAGE } from 'utils/constants';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI
      .signup({ email, login, first_name, second_name, phone, password })
      .then(() => {
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        router.go('/');
      })
      .catch((err) => {
        showTooltip({
          text: getMessageFromResponse(err.responseText) as string,
          type: 'error',
        });
      });
  }
}

export default new AuthService();
