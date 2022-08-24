import { authAPI } from '../Api';
import { SignupType, SigninType } from 'types';
import { BrowseRouter as router, store } from 'core';
import { showTooltip, showError, MESSAGES, PATHNAMES, lOCALSTORAGE } from 'utils';

class AuthService {
  public signup({ ...rest }: SignupType) {
    authAPI
      .signup({ ...rest })
      .then(() => {
        showTooltip({
          text: MESSAGES.SUCCESS_SIGNUP_MESSAGE,
          type: 'success',
        });
        localStorage.setItem(lOCALSTORAGE.IS_SIGNIN, 'true');
        router.go(PATHNAMES.MESSAGER_PATH);
      })
      .catch(showError);
  }

  public signin({ ...rest }: SigninType) {
    authAPI
      .signin({ ...rest })
      .then(() => {
        showTooltip({
          text: MESSAGES.SUCCESS_SIGNIN_MESSAGE,
          type: 'success',
        });
        localStorage.setItem(lOCALSTORAGE.IS_SIGNIN, 'true');
        router.go(PATHNAMES.MESSAGER_PATH);
      })
      .catch(showError);
  }

  public signout() {
    authAPI
      .signout()
      .then(() => {
        router.go(PATHNAMES.SIGNIN_PATH);
        localStorage.removeItem(lOCALSTORAGE.IS_SIGNIN);
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

  public redirectUser() {
    authAPI
      .getInfo()
      .then(() => router.go(PATHNAMES.MESSAGER_PATH))
      .catch((err) => console.log(err.responseText));
  }
}

export default new AuthService();
