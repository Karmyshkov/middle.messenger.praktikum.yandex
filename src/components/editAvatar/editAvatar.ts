import Block from 'core/Block';
import './editAvatar.css';
import avatar from 'img/avatar.svg';
import { EditAvatarProps } from './types';

export class EditAvatar extends Block {
  constructor({ onClick }: EditAvatarProps) {
    super({ events: { click: onClick } });
  }
  protected render(): string {
    // language=hbs
    return `
      <div class="edit-avatar">
        <img class="edit-avatar__img" src="${avatar}" alt="Аватар по умолчанию" />
        <span class="edit-avatar__span">Поменять аватар</span>
      </div>
    `;
  }
}
