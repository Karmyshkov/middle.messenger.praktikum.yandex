import { Block } from 'core';
import './userItem.css';
import { UserItemProps } from './types';
import { BASE_URL_RESOURCES, DATA_ATTRIBUTE_USER_ID } from 'utils';
import defaultIcon from 'img/avatar.svg';

export class UserItem extends Block {
  static componentName = 'UserItem';
  constructor({ id, avatar, login, email, type, role, onClick }: UserItemProps) {
    super({ id, avatar, login, email, type, role, events: { click: onClick } });
  }

  protected getStateFromProps(props: any): void {
    this.state = {
      id: props.id,
      avatar: props.avatar,
      login: props.login,
      email: props.email,
      type: props.type,
      role: props.role,
    };
  }
  protected render(): string {
    const { id, avatar, login, email, type, role } = this.state;

    // language=hbs
    return `
      <li class="user-item" ${DATA_ATTRIBUTE_USER_ID}="${id}">
        <img class="user-item__avatar" src="${
          avatar && avatar !== 'null' ? `${BASE_URL_RESOURCES}${avatar}` : defaultIcon
        }" alt="Аватар">
        <div class="user-item__wrapper">
          <p class="user-item__text-login">${login}</p>
          <p class="user-item__text-email">${email}</p>
          ${role === 'admin' ? '<p class="user-item__role">Админ</p>' : ''}
        </div>
        <button class="user-item__btn" type="button">
          ${type === 'add' ? '+' : '-'}
        </button>
      </li>
    `;
  }
}
