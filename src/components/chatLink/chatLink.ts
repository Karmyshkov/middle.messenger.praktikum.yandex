import Block from 'core/Block';
import './chatLink.css';
import { ChatLinkProps } from './types';
import right_arrow from 'img/right-arrow.svg';

export class ChatLink extends Block {
  static componentName = 'ChatLink';
  constructor({ onClick }: ChatLinkProps) {
    super({ events: { click: onClick } });
  }
  protected render(): string {
    // language=hbs
    return `
      <Button class="link-profile page__link-profile">
        <span class="link-profile__text">Профиль</span>
        <img class="link-profile__img" src="${right_arrow}" alt="Перейти к профилю пользователя">
      </Button>
    `;
  }
}
