import { chatApi } from 'api';
import { CreateChatType } from 'types';
import { BrowseRouter as router } from 'core';
import { showTooltip, showError } from 'utils';
import { SUCCESS_CREATE_MESSAGE } from 'utils/constants';
import { signupStore } from 'core/Store';

class AuthService {
  public createChat({ title }: CreateChatType) {
    chatApi
      .createChat({ title })
      .then((data) => {
        signupStore.setState(data);
        showTooltip({
          text: SUCCESS_CREATE_MESSAGE,
          type: 'success',
        });
      })
      .catch((err) => showError(err.responseText));
  }
}

export default new AuthService();
