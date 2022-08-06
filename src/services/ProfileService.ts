import { profileApi } from 'api';
import { showTooltip, showError } from 'utils';
import { SUCCESS_CHANGE_AVATAR_MESSAGE } from 'utils/constants';
import store from 'core/Store';

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
}

export default new ProfileService();
