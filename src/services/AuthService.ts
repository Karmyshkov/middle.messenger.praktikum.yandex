import { authAPI } from 'api';
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
        router.go(PATHNAMES.PRIVATE.MESSAGER_PATH);
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
        router.go(PATHNAMES.PRIVATE.MESSAGER_PATH);
      })
      .catch(showError);
  }

  public signout() {
    authAPI
      .signout()
      .then(() => {
        router.go(PATHNAMES.PUBLIC.SIGNIN_PATH);
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
}

export default new AuthService();
