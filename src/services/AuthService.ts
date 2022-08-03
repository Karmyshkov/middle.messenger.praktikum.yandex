import authAPI from 'api/AuthAPI';
import { SignupType, SigninType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, getMessageFromResponse } from 'utils';
import { SUCCESS_SIGNUP_MESSAGE, SUCCESS_SIGNIN_MESSAGE } from 'utils/constants';
import { signupStore, signinStore } from 'core/Store';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI
      .signup({ email, login, first_name, second_name, phone, password })
      .then((data) => {
        signupStore.setState(data);
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
      })
      .catch((err) => {
        showTooltip({
          text: getMessageFromResponse(err.responseText) as string,
          type: 'error',
        });
      });
  }

  public signin({ login, password }: SigninType) {
    authAPI
      .signin({ login, password })
      .then((data) => {
        signinStore.setState(data);
        showTooltip({
          text: SUCCESS_SIGNIN_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
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
