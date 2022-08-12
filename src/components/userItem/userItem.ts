import { Block } from 'core';
import './userItem.css';
import { UserItemProps } from './types';
import { BASE_URL_RESOURCES, DATA_ATTRIBUTE_USER_ID } from 'utils';
import defaultIcon from 'img/avatar.svg';

export class UserItem extends Block {
  static componentName = 'UserItem';
  constructor({ id, avatar, login, email, onClick }: UserItemProps) {
    super({ id, avatar, login, email, events: { click: onClick } });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      id: props.id,
      avatar: props.avatar,
      login: props.login,
      email: props.email,
    };
  }
  protected render(): string {
    const { id, avatar, login, email } = this.state;

    // language=hbs
    return `
      <li class="user-item" ${DATA_ATTRIBUTE_USER_ID}="${id}">
        <img class="user-item__avatar" src="${
          avatar && avatar !== 'null' ? `${BASE_URL_RESOURCES}${avatar}` : defaultIcon
        }" alt="Аватар">
        <div class="user-item__wrapper">
          <p class="user-item__text-login">${login}</p>
          <p class="user-item__text-email">${email}</p>
        </div>
        <button class="user-item__btn" type="button">+</button>
      </li>
    `;
  }
}
