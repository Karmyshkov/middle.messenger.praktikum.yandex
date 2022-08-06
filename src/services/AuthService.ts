import { authAPI } from 'api';
import { SignupType, SigninType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, showError } from 'utils';
import { SUCCESS_SIGNUP_MESSAGE, SUCCESS_SIGNIN_MESSAGE } from 'utils/constants';
import store from 'core/Store';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI
      .signup({ email, login, first_name, second_name, phone, password })
      .then(() => {
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
      })
      .catch((err) => showError(err.responseText));
  }

  public signin({ login, password }: SigninType) {
    authAPI
      .signin({ login, password })
      .then(() => {
        showTooltip({
          text: SUCCESS_SIGNIN_MESSAGE,
          type: 'success',
        });
        router.go('/messenger');
      })
      .catch((err) => showError(err.responseText));
  }

  public signout() {
    authAPI
      .signout()
      .then(() => router.go('/'))
      .catch((err) => showError(err.responseText));
  }

  public getInfo() {
    authAPI
      .getInfo()
      .then((userInfo: any) =>
        store.setState({ userInfo: JSON.parse(userInfo.response) })
      )
      .catch((err) => showError(err.responseText));
  }
}

export default new AuthService();
