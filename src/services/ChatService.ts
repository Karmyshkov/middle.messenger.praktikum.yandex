import { chatApi } from 'api';
import { CreateChatType, RemoveChatType, SearchUserByLoginType } from 'types';
import { showTooltip, showError } from 'utils';
import { SUCCESS_CREATE_MESSAGE, SUCCESS_REMOVE_CHAT_MESSAGE } from 'utils/constants';
import { store } from 'core';

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
      .catch(showError);
  }
  public getChats() {
    chatApi
      .getChats()
      .then((chats: any) => store.setState({ chats: JSON.parse(chats.response) }))
      .catch(showError);
  }
  public removeChatById({ chatId }: RemoveChatType) {
    chatApi
      .removeChatById({ chatId })
      .then(() =>
        showTooltip({
          text: SUCCESS_REMOVE_CHAT_MESSAGE,
          type: 'success',
        })
      )
      .catch(showError);
  }
  public searchUserByLogin({ login }: SearchUserByLoginType) {
    chatApi
      .searchUserByLogin({ login })
      .then((user: any) => store.setState({ user: JSON.parse(user.response) }))
      .catch(showError);
  }
}

export default new AuthService();
