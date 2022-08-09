import { chatApi } from 'api';
import {
  CreateChatType,
  RemoveChatType,
  SearchUserByLoginType,
  AddUserToChat,
} from 'types';
import { showTooltip, showError } from 'utils';
import { SUCCESS_CREATE_MESSAGE, SUCCESS_REMOVE_CHAT_MESSAGE } from 'utils/constants';
import { store } from 'core';

class ChatService {
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
  public addUserToChat({ users, chatId }: AddUserToChat) {
    chatApi
      .addUserToChat({ users, chatId })
      .then((user: any) => {
        console.log(user);
        store.setState({ users: JSON.parse(user.response) });
      })
      .catch(showError);
  }
  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return chatApi
      .searchUserByLogin({ login })
      .then((users: any) => users.response)
      .catch(showError);
  }
}

export default new ChatService();
