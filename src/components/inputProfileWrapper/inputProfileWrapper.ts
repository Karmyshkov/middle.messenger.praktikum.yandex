import Block from 'core/Block';
import './inputProfileWrapper.css';
import { InputProfileWrapperProps } from './types';

export class InputProfileWrapper extends Block {
  constructor({
    formName,
    name,
    minlength,
    maxlength,
    type,
    value,
    helperText,
    onInput,
  }: InputProfileWrapperProps) {
    super({
      formName,
      name,
      minlength,
      maxlength,
      type,
      value,
      helperText,
      onInput,
    });
  }
  protected getStateFromProps(props: InputProfileWrapperProps): void {
    this.state = {
      formName: props.formName,
      name: props.name,
      minlength: props.minlength,
      maxlength: props.maxlength,
      type: props.type,
      value: props.value,
      helperText: props.helperText,
      onInput: props.onInput,
    };
  }
  protected render(): string {
    const { name, minlength, maxlength, type, value, helperText } = this.state;
    // language=hbs
    return `
      <li class="input-profile-wrapper">
        <label class="input-profile-wrapper__label">
          {{{InputProfile
            onInput=onInput
            type="${type}"
            value="${value}"
            name="${name}"
            minlength="${minlength}"
            maxlength="${maxlength}"
          }}}
          <span class="input-profile-wrapper__span">${helperText}</span>
        </label>
      </li>
    `;
  }
}
