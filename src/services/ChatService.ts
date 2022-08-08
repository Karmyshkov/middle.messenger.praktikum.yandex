import { chatApi } from 'api';
import {
  CreateChatType,
  RemoveChatType,
  SearchUserByLoginType,
  AddUserToChat,
} from 'types';
import { showTooltip, showError } from 'utils';
import {
  SUCCESS_CREATE_MESSAGE,
  SUCCESS_REMOVE_CHAT_MESSAGE,
  BASE_URL_RESOURCES,
} from 'utils/constants';
import { store } from 'core';
import defaultIcon from 'img/avatar.svg';
import {
  config,
  TAG_NAME_UL,
  TAG_NAME_LI,
  TAG_NAME_DIV,
  TAG_NAME_IMG,
  TAG_NAME_P,
  TAG_NAME_BUTTON,
} from 'utils/constants';

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
  public searchUserByLogin({ login, form }: SearchUserByLoginType) {
    chatApi
      .searchUserByLogin({ login })
      .then((users: any) => {
        const fragment = document.createDocumentFragment();
        const ul = document.createElement(TAG_NAME_UL);
        ul.classList.add(config.popupListSelector);

        JSON.parse(users.response).map((user: any) => {
          const li = document.createElement(TAG_NAME_LI);
          const wrapper = document.createElement(TAG_NAME_DIV);
          const avatar = document.createElement(TAG_NAME_IMG);
          const login = document.createElement(TAG_NAME_P);
          const email = document.createElement(TAG_NAME_P);
          const btn = document.createElement(TAG_NAME_BUTTON);

          li.classList.add(config.popupItemSelector);
          wrapper.classList.add(config.popupWrapperSelector);
          avatar.classList.add(config.popupAvatarSelector);
          login.classList.add(config.popupTextLoginSelector);
          email.classList.add(config.popupTextEmailSelector);
          btn.classList.add(config.popupBtnSelector);

          avatar.src = user.avatar ? `${BASE_URL_RESOURCES}${user.avatar}` : defaultIcon;
          login.textContent = user.login;
          email.textContent = user.email;
          btn.textContent = '+';
          btn.type = 'button';

          li.appendChild(avatar);
          wrapper.appendChild(login);
          wrapper.appendChild(email);
          li.appendChild(wrapper);
          li.appendChild(btn);

          fragment.appendChild(li);
        });

        ul.appendChild(fragment);
        form?.appendChild(ul);
      })
      .catch(showError);
  }
}

export default new ChatService();
