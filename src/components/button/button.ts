import { Block } from 'core';
import './button.css';
import { ButtonProps } from './types';

export class Button extends Block {
  static componentName = 'Button';

  constructor({ onClick, ...rest }: ButtonProps) {
    super({ events: { click: onClick }, ...rest });
  }

  protected getStateFromProps(props: ButtonProps): void {
    this.state = {
      textBtn: props.textBtn,
      type: props.type,
      classes: props.classes,
    };
  }

  protected render(): string {
    const { textBtn, type, classes } = this.state;
    // language=hbs
    return `<Button class="button ${classes ? classes : ''}" type="${type}">${
      textBtn ? textBtn : ''
    }</Button>`;
  }
}
