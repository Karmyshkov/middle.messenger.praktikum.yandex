import authAPI from 'api/AuthAPI';
import { SignupType, SigninType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, showError } from 'utils';
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
      .catch((err) => showError(err.responseText));
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
      .catch((err) => showError(err.responseText));
  }

  public signout() {
    authAPI
      .signout()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => showError(err.responseText));
  }
}

export default new AuthService();
