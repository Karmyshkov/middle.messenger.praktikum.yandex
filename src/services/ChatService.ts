import { chatApi } from 'api';
import { CreateChatType } from 'types';
import { showTooltip, showError } from 'utils';
import { SUCCESS_CREATE_MESSAGE } from 'utils/constants';
import store from 'core/Store';

class AuthService {
  public createChat({ title }: CreateChatType) {
    chatApi
      .createChat({ title })
      .then((chat) => {
        store.setState(chat);
        showTooltip({
          text: SUCCESS_CREATE_MESSAGE,
          type: 'success',
        });
      })
      .catch((err) => showError(err.responseText));
  }

  public getChats() {
    chatApi
      .getChats()
      .then((chats: any) => {
        store.setState(JSON.parse(chats.response));
      })
      .catch((err) => showError(err.responseText));
  }
}

export default new AuthService();
