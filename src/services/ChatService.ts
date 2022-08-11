import { chatApi } from 'api';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
} from 'types';
import {
  showTooltip,
  showError,
  SUCCESS_CREATE_MESSAGE,
  SUCCESS_REMOVE_CHAT_MESSAGE,
} from 'utils';
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
      .then(({ response }: any) => store.setState({ chats: JSON.parse(response) }))
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
  public addUserToChat({ users, chatId }: AddUserToChatType) {
    chatApi
      .addUserToChat({ users, chatId })
      .then(({ response }: any) => store.setState({ users: JSON.parse(response) }))
      .catch(showError);
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return chatApi
      .getChatToken({ chatId })
      .then(({ response }: any) => JSON.parse(response))
      .catch(showError);
  }
}

export default new ChatService();
