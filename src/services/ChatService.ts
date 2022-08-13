import { chatApi } from 'api';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
  GetUserForChatType,
  RemoveUserFromChat,
  STORE_EVENTS,
  InitialStateType,
  UserType,
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
        const state = store.getState() as InitialStateType;

        const newChat = {
          avatar: null,
          id: JSON.parse(response).id,
          title: title,
          unread_count: 0,
          created_by: 0,
        };

        state.chats?.push(newChat);

        store.setState({ chats: state.chats });

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
        const state = store.getState() as InitialStateType;

        showTooltip({
          text: SUCCESS_REMOVE_CHAT_MESSAGE,
          type: 'success',
        });

        store.setState({
          chats: state.chats?.filter((chat) => chat.id !== Number(chatId)),
        });
      })
      .catch(showError);
  }
  public addUserToChat({ users, chatId }: AddUserToChatType) {
    chatApi
      .addUserToChat({ users, chatId })
      .then(() => {
        const state = store.getState() as InitialStateType;

        if (state.usersFromChats && state.users) {
          const usersFromChats = JSON.parse(state.usersFromChats);
          const userItems = JSON.parse(state.users);

          usersFromChats.push(userItems.find((user: UserType) => user.id === users[0]));
          store.setState(
            { usersFromChats: JSON.stringify(usersFromChats) },
            STORE_EVENTS.ADD_USERS
          );

          const filteredUserItems = userItems.filter(
            (user: UserType) => user.id !== users[0]
          );
          store.setState(
            { users: JSON.stringify(filteredUserItems) },
            STORE_EVENTS.ADD_USERS
          );

          showTooltip({
            text: SUCCESS_ADD_USER_TO_CHAT_MESSAGE,
            type: 'success',
          });
        }
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
        const state = store.getState() as InitialStateType;

        if (state.usersFromChats) {
          const usersFromChats = JSON.parse(state.usersFromChats);

          showTooltip({
            text: SUCCESS_REMOVE_USER_FROM_CHAT,
            type: 'success',
          });

          store.setState(
            {
              usersFromChats: JSON.stringify(
                usersFromChats.filter((user: UserType) => user.id !== users[0])
              ),
            },
            STORE_EVENTS.DELETE_USERS
          );

          usersFromChats.length === 1 &&
            store.setState(
              { chats: state.chats?.filter((chat) => chat.id !== chatId) },
              STORE_EVENTS.DELETE_USERS
            );
        }
      })
      .catch(showError);
  }
}

export default new ChatService();
