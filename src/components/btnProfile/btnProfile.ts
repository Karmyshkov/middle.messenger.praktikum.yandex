import Block from 'core/Block';
import './btnProfile.css';
import { BtnProfileProps } from './types';

export class BtnProfile extends Block {
  static componentName = 'BtnProfile';
  constructor({ onClick, text, classes, href, type }: BtnProfileProps) {
    super({ text, classes, href, type, events: { click: onClick } });
  }
  protected getStateFromProps(props: BtnProfileProps): void {
    this.state = {
      text: props.text,
      classes: props.classes,
      href: props.href,
      type: props.type,
    };
  }
  protected render(): string {
    const { text, classes, href, type } = this.state;
    const button =
      type === 'link'
        ? `<a class="btn-profile__link ${
            classes ? classes : ''
          }" href="${href}">${text}</a>`
        : `<button class="btn-profile__btn ${classes ? classes : ''}">${text}</button>`;
    // language=hbs
    return `
      <li class="btn-profile">${button}</li>
    `;
  }
}
