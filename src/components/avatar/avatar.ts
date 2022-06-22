import Block from 'core/Block';
import './avatar.css';
import { AvatarProps } from './types';

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
        src="${srcAvatar}"
        alt="Аватар пользователя ${userName}"
      />
    `;
  }
}
