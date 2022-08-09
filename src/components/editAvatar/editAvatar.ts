import { Block } from 'core';
import './editAvatar.css';
import { EditAvatarProps } from './types';
import defaultIcon from 'img/avatar.svg';
import { BASE_URL_RESOURCES } from 'utils';

export class EditAvatar extends Block {
  static componentName = 'EditAvatar';
  constructor({ avatar, onClick }: EditAvatarProps) {
    super({ avatar, events: { click: onClick } });
  }
  protected getStateFromProps(props: any): void {
    this.state = {
      avatar: props.avatar,
    };
  }
  protected render(): string {
    const { avatar } = this.state;
    // language=hbs
    return `
      <div class="edit-avatar">
        <img class="edit-avatar__img" src="${
          avatar !== 'undefined' && avatar !== 'null'
            ? `${BASE_URL_RESOURCES}${avatar}`
            : defaultIcon
        }" alt="Аватар по умолчанию" />
        <span class="edit-avatar__span">Поменять аватар</span>
      </div>
    `;
  }
}
