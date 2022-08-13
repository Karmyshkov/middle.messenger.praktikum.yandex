import { authAPI } from 'api';
import { SignupType, SigninType } from 'types';
import { BrowseRouter as router, store } from 'core';
import {
  showTooltip,
  showError,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE,
  PATHNAMES,
} from 'utils';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI
      .signup({ email, login, first_name, second_name, phone, password })
      .then(() => {
        showTooltip({
          text: SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        localStorage.setItem('isSignin', 'true');
        router.go(PATHNAMES['MESSAGER_PATH']);
      })
      .catch(showError);
  }

  public signin({ login, password }: SigninType) {
    authAPI
      .signin({ login, password })
      .then(() => {
        showTooltip({
          text: SUCCESS_SIGNIN_MESSAGE,
          type: 'success',
        });
        localStorage.setItem('isSignin', 'true');
        router.go(PATHNAMES['MESSAGER_PATH']);
      })
      .catch(showError);
  }

  public signout() {
    authAPI
      .signout()
      .then(() => {
        router.go(PATHNAMES['SIGNIN_PATH']);
        localStorage.removeItem('isSignin');
      })
      .catch(showError);
  }

  public getInfo() {
    authAPI
      .getInfo()
      .then(({ response }: any) => {
        store.setState({ userInfo: JSON.parse(response) });
      })
      .catch(showError);
  }
}

export default new AuthService();
