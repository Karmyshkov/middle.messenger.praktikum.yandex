import { Block } from 'core';
import './input.css';
import { InputProps } from './types';

export class Input extends Block {
  static componentName = 'Input';
  constructor({
    name,
    type,
    minlength,
    maxlength,
    onInput,
    onFocus,
    onBlur,
  }: InputProps) {
    super({
      name,
      type,
      minlength,
      maxlength,
      events: { input: onInput, focus: onFocus, blur: onBlur },
    });
  }
  protected getStateFromProps(props: InputProps): void {
    this.state = {
      name: props.name,
      type: props.type,
      minlength: props.minlength,
      maxlength: props.maxlength,
    };
  }
  protected render(): string {
    const { name, type, minlength, maxlength } = this.state;
    // language=hbs
    return `
      <input
        class="input__text-field"
        type=${type}
        minlength=${minlength}
        maxlength=${maxlength}
        required
        name="${name}"
      />
    `;
  }
}
