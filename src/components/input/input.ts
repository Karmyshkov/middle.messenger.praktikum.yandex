import Block from 'core/Block';
import './input.css';
import { InputProps } from './types';

export class Input extends Block {
  constructor({ type, minlength, maxlength, onFocus, onBlur }: InputProps) {
    super({
      type,
      minlength,
      maxlength,
      events: { focus: onFocus, blur: onBlur },
    });
  }
  protected getStateFromProps(props: InputProps): void {
    this.state = {
      type: props.type,
      minlength: props.minlength,
      maxlength: props.maxlength,
    };
  }
  protected render(): string {
    const { type, minlength, maxlength } = this.state;
    // language=hbs
    return `
      <input
        class="input__text-field"
        type=${type}
        minlength=${minlength}
        maxlength=${maxlength}
        required
      />
    `;
  }
}
