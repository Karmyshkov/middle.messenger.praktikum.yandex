import Block from 'core/Block';
import './btnProfile.css';
import { BtnProfileProps } from './types';

export class BtnProfile extends Block {
  static componentName = 'BtnProfile';
  constructor({ text, classes, href }: BtnProfileProps) {
    super({ text, classes, href });
  }
  protected getStateFromProps(props: BtnProfileProps): void {
    this.state = {
      text: props.text,
      classes: props.classes,
      href: props.href,
    };
  }
  protected render(): string {
    const { text, classes, href } = this.state;
    // language=hbs
    return `
      <li class="btn-profile">
        <a class="btn-profile__link ${classes ? classes : ''}" href="${href}">
          ${text}
        </a>
      </li>
    `;
  }
}
