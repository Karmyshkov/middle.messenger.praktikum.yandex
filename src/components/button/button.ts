import { Block } from 'core';
import './button.css';
import { ButtonProps } from './types';

export class Button extends Block {
  static componentName = 'Button';
  constructor({ textBtn, type, classes, onClick }: ButtonProps) {
    super({ textBtn, type, classes, events: { click: onClick } });
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
