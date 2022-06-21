import Block from 'core/Block';
import './InputProfile.css';
import { InputProfileProps } from './types';

export class InputProfile extends Block {
  constructor({
    name,
    minlength,
    maxlength,
    type,
    value,
    helperText,
  }: InputProfileProps) {
    super({ name, minlength, maxlength, type, value, helperText });
  }
  protected getStateFromProps(props: InputProfileProps): void {
    this.state = {
      name: props.name,
      minlength: props.minlength,
      maxlength: props.maxlength,
      type: props.type,
      value: props.value,
      helperText: props.helperText,
    };
  }

  protected render(): string {
    const { name, minlength, maxlength, type, value, helperText } = this.state;
    // language=hbs
    return `
      <li class="input-profile">
        <label class="input-profile__label">
          <input class="input-profile__input" type="${type}" value="${value}" name="${name}" minlength="${minlength}" maxlength="${maxlength}" />
          <span class="input-profile__span">${helperText}</span>
        </label>
      </li>
    `;
  }
}
