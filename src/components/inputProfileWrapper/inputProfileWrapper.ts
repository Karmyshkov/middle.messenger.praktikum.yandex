import { Block } from 'core';
import './inputProfileWrapper.css';
import { InputProfileWrapperProps } from './types';

export class InputProfileWrapper extends Block {
  static componentName = 'InputProfileWrapper';

  constructor({ ...rest }: InputProfileWrapperProps) {
    super({ ...rest });
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
      onFocus: props.onFocus,
      onBlur: props.onBlur,
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
            onFocus=onFocus
            onBlur=onBlur
            type="${type}"
            value="${value}"
            name="${name}"
            minlength="${minlength}"
            maxlength="${maxlength}"
          }}}
          <span class="input-profile-wrapper__span">${helperText}</span>
          <span class="input-profile-wrapper__error"></span>
        </label>
      </li>
    `;
  }
}
