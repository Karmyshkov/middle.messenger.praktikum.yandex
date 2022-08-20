import { chatApi } from '../Api';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
  GetUserForChatType,
  RemoveUserFromChat,
  StoreEvents,
  InitialStateType,
  UserType,
} from 'types';
import { showTooltip, showError, MESSAGES } from 'utils';
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
          text: MESSAGES.SUCCESS_CREATE_MESSAGE,
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
  public removeChatById({ ...rest }: RemoveChatType) {
    chatApi
      .removeChatById({ ...rest })
      .then(() => {
        const state = store.getState() as InitialStateType;

        showTooltip({
          text: MESSAGES.SUCCESS_REMOVE_CHAT_MESSAGE,
          type: 'success',
        });

        store.setState({
          chats: state.chats?.filter((chat) => chat.id !== Number(rest.chatId)),
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
            StoreEvents.ADD_USERS
          );

          const filteredUserItems = userItems.filter(
            (user: UserType) => user.id !== users[0]
          );
          store.setState(
            { users: JSON.stringify(filteredUserItems) },
            StoreEvents.ADD_USERS
          );

          showTooltip({
            text: MESSAGES.SUCCESS_ADD_USER_TO_CHAT_MESSAGE,
            type: 'success',
          });
        }
      })
      .catch(showError);
  }

  public getChatToken({ ...rest }: GetChatTokenType) {
    return chatApi
      .getChatToken({ ...rest })
      .then(({ response }: any) => JSON.parse(response))
      .catch(showError);
  }

  public getUserForChat({ ...rest }: GetUserForChatType) {
    chatApi
      .getUserForChat({ ...rest })
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
            text: MESSAGES.SUCCESS_REMOVE_USER_FROM_CHAT,
            type: 'success',
          });

          store.setState(
            {
              usersFromChats: JSON.stringify(
                usersFromChats.filter((user: UserType) => user.id !== users[0])
              ),
            },
            StoreEvents.DELETE_USERS
          );

          usersFromChats.length === 1 &&
            store.setState(
              { chats: state.chats?.filter((chat) => chat.id !== chatId) },
              StoreEvents.DELETE_USERS
            );
        }
      })
      .catch(showError);
  }
}

export default new ChatService();
