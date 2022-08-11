import { profileApi } from 'api';
import { showTooltip, showError } from 'utils';
import {
  SUCCESS_CHANGE_AVATAR_MESSAGE,
  SUCCESS_CHANGE_USER_INFO_MESSAGE,
} from 'utils/constants';
import { store } from 'core';
import { UserInfo, UserPassword, SearchUserByLoginType } from 'types';

class ProfileService {
  public changeAvatar(avatar: FormData) {
    profileApi
      .changeAvatar(avatar)
      .then((userInfo: any) => {
        store.setState({ userInfo: JSON.parse(userInfo.response) });
        showTooltip({
          text: SUCCESS_CHANGE_AVATAR_MESSAGE,
          type: 'success',
        });
      })
      .catch(showError);
  }
  public changeUserInfo(userInfo: UserInfo) {
    profileApi
      .changeUserInfo(userInfo)
      .then((userInfo: any) => {
        store.setState({ userInfo: JSON.parse(userInfo.response) });
        showTooltip({
          text: SUCCESS_CHANGE_USER_INFO_MESSAGE,
          type: 'success',
        });
      })
      .catch(showError);
  }
  public changeUserPassword(userPassword: UserPassword) {
    profileApi
      .changeUserPassword(userPassword)
      .then(() =>
        showTooltip({
          text: SUCCESS_CHANGE_USER_INFO_MESSAGE,
          type: 'success',
        })
      )
      .catch(showError);
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return profileApi
      .searchUserByLogin({ login })
      .then((users: any) => users.response)
      .catch(showError);
  }
}

export default new ProfileService();
