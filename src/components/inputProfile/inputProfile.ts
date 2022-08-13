import { Block } from 'core';
import './inputProfile.css';
import { InputProfileProps } from './types';

export class InputProfile extends Block {
  static componentName = 'InputProfile';

  constructor({ onInput, onFocus, onBlur, ...rest }: InputProfileProps) {
    super({
      events: { input: onInput, focus: onFocus, blur: onBlur },
      ...rest,
    });
  }

  protected getStateFromProps(props: InputProfileProps): void {
    this.state = {
      name: props.name,
      minlength: props.minlength,
      maxlength: props.maxlength,
      type: props.type,
      value: props.value,
    };
  }

  protected render(): string {
    const { name, minlength, maxlength, type, value } = this.state;
    // language=hbs
    return `
      <input class="input-profile"
        type="${type}"
        value="${value}"
        name="${name}"
        minlength="${minlength}"
        maxlength="${maxlength}"
        required
      />
    `;
  }
}
