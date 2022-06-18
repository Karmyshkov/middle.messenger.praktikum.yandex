import Block from "core/Block";
import "./avatar.css";

interface AvatarProps {
  srcAvatar: string;
  userName: string;
}

export class Avatar extends Block {
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
