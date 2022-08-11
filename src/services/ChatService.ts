import { chatApi } from 'api';
import { CreateChatType, RemoveChatType, AddUserToChat, GetChatTokenType } from 'types';
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
  public addUserToChat({ users, chatId }: any) {
    chatApi
      .addUserToChat({ users, chatId })
      .then((user: any) => store.setState({ users: JSON.parse(user.response) }))
      .catch(showError);
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return chatApi
      .getChatToken({ chatId })
      .then((token: any) => JSON.parse(token.response))
      .catch(showError);
  }
}

export default new ChatService();
