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
        const popupList = form?.querySelector('.popup__list');
        popupList && form?.removeChild(popupList);

        const fragment = document.createDocumentFragment();
        const ul = document.createElement('ul');
        ul.classList.add('popup__list');

        JSON.parse(users.response).map((user: any) => {
          const li = document.createElement('li');
          const wrapper = document.createElement('div');
          const avatar = document.createElement('img');
          const login = document.createElement('p');
          const email = document.createElement('p');
          const btn = document.createElement('button');

          li.classList.add('popup__item');
          wrapper.classList.add('popup__wrapper');
          avatar.classList.add('popup__avatar');
          login.classList.add('popup__text-login');
          email.classList.add('popup__text-email');
          btn.classList.add('popup__btn');

          avatar.src = user.avatar ? `${BASE_URL_RESOURCES}${user.avatar}` : defaultIcon;
          login.textContent = user.login;
          email.textContent = user.email;
          btn.textContent = '+';

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

export default new AuthService();
