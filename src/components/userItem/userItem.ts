import Block from 'core/Block';
import './userItem.css';
import { UserItemProps } from './types';
import { BASE_URL_RESOURCES } from 'utils/constants';
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
      <li class="popup__item">
        <img class="popup__avatar" src="${
          avatar && avatar !== 'null' ? `${BASE_URL_RESOURCES}${avatar}` : defaultIcon
        }" alt="Аватар">
        <div class="popup__wrapper">
          <p class="popup__text-login">${login}</p>
          <p class="popup__text-email">${email}</p>
        </div>
        <button class="popup__btn" type="button">+</button>
      </li>
    `;
  }
}
