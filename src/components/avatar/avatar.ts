import { Block } from 'core';
import './avatar.css';
import { AvatarProps } from './types';
import defaultIcon from 'img/avatar.svg';
import { BASE_URL_RESOURCES } from 'utils';

export class Avatar extends Block {
  static componentName = 'Avatar';
  constructor({ srcAvatar, userName }: AvatarProps) {
    super({ srcAvatar, userName });
  }
  protected getStateFromProps(props: AvatarProps): void {
    this.state = {
      userName: props.userName,
      srcAvatar: props.srcAvatar,
    };
  }
  protected render(): string {
    const { userName, srcAvatar } = this.state;

    // language=hbs
    return `
      <img
        class="avatar"
        src="${
          srcAvatar !== 'undefined' && srcAvatar !== 'null'
            ? `${BASE_URL_RESOURCES}${srcAvatar}`
            : defaultIcon
        }"
        alt="Аватар пользователя ${userName}"
      />
    `;
  }
}
