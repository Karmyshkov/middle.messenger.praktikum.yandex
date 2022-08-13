import { chatApi } from 'api';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
  GetUserForChatType,
  RemoveUserFromChat,
} from 'types';
import {
  showTooltip,
  showError,
  SUCCESS_CREATE_MESSAGE,
  SUCCESS_REMOVE_CHAT_MESSAGE,
  SUCCESS_ADD_USER_TO_CHAT_MESSAGE,
  SUCCESS_REMOVE_USER_FROM_CHAT,
} from 'utils';
import { store } from 'core';

class ChatService {
  public createChat({ title }: CreateChatType) {
    chatApi
      .createChat({ title })
      .then(({ response }: any) => {
        const state = store.getState();

        const chat = {
          [state.chats.length]: {
            avatar: null,
            id: JSON.parse(response).id,
            last_message: null,
            title: title,
            unread_count: 0,
            created_by: null,
          },
        };

        store.setState({ chats: Object.assign(state.chats, chat) });

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
      .then(() => {
        const state = store.getState();
        showTooltip({
          text: SUCCESS_REMOVE_CHAT_MESSAGE,
          type: 'success',
        });
        store.setState({
          chats: state.chats.filter((chat) => chat.id !== Number(chatId)),
        });
      })
      .catch(showError);
  }
  public addUserToChat({ users, chatId }: AddUserToChatType) {
    chatApi
      .addUserToChat({ users, chatId })
      .then(() => {
        const state = store.getState();
        const usersFromChats = JSON.parse(state.usersFromChats);
        const userItems = JSON.parse(state.users);

        usersFromChats.push(userItems.find((user) => user.id === users[0]));
        store.setState({ usersFromChats: JSON.stringify(usersFromChats) });

        const filteredUserItems = userItems.filter((user) => user.id !== users[0]);
        store.setState({ users: JSON.stringify(filteredUserItems) });

        showTooltip({
          text: SUCCESS_ADD_USER_TO_CHAT_MESSAGE,
          type: 'success',
        });
      })
      .catch(showError);
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return chatApi
      .getChatToken({ chatId })
      .then(({ response }: any) => JSON.parse(response))
      .catch(showError);
  }

  public getUserForChat({ chatId }: GetUserForChatType) {
    chatApi
      .getUserForChat({ chatId })
      .then(({ response }: any) => {
        store.setState({ usersFromChats: response });
      })
      .catch(showError);
  }

  public removeUserFromChat({ users, chatId }: RemoveUserFromChat) {
    chatApi
      .removeUserFromChat({ users, chatId })
      .then(() => {
        const state = store.getState();
        const usersFromChats = JSON.parse(state.usersFromChats);

        showTooltip({
          text: SUCCESS_REMOVE_USER_FROM_CHAT,
          type: 'success',
        });

        store.setState({
          usersFromChats: JSON.stringify(
            usersFromChats.filter((user) => user.id !== users[0])
          ),
        });

        store.setState({ chats: state.chats.filter((chat) => chat.id !== chatId) });
      })
      .catch(showError);
  }
}

export default new ChatService();
