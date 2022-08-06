import { profileApi } from 'api';
import { showTooltip, showError } from 'utils';
import {} from 'utils/constants';
import store from 'core/Store';

class ProfileService {
  public changeAvatar(avatar: FormData) {
    profileApi
      .changeAvatar(avatar)
      .then((data) => {
        store.setState(data);
        showTooltip({
          text: 'Аватар изменен',
          type: 'success',
        });
      })
      .catch((err) => showError(err.responseText));
  }
}

export default new ProfileService();
