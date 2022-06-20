import Block from 'core/Block';
import './menuButton.css';
import { MenuButtonProps } from './types';

export class MenuButton extends Block {
  constructor({ text, icon, alt, classes, type, onClick }: MenuButtonProps) {
    super({ text, icon, alt, classes, type, events: { click: onClick } });
  }
  protected getStateFromProps(props: MenuButtonProps): void {
    this.state = {
      text: props.text,
      icon: props.icon,
      alt: props.alt,
      classes: props.classes,
      type: props.type,
    };
  }

  protected render(): string {
    const { text, icon, alt, classes, type } = this.state;
    // language=hbs
    return `
      <button class="menu__btn ${classes}" type="${type}">
        <img class="menu__icon" src="${icon}" alt="${alt}" />
        ${text}
      </button>
    `;
  }
}