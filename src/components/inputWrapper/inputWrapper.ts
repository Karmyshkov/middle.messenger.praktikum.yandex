import Block from 'core/Block';
import './inputWrapper.css';
import { InputWrapperProps } from './types';

export class InputWrapper extends Block {
  constructor({
    type,
    helperText,
    minlength,
    maxlength,
    classes,
    onInput,
    onFocus,
  }: InputWrapperProps) {
    super({
      type,
      helperText,
      minlength,
      maxlength,
      classes,
      events: { input: onInput, focus: onFocus },
    });
  }
  protected render(): string {
    // language=hbs
    return `
      <fieldset class="input {{classes}}">
        <label class="input__label">
          <input
            class="input__text-field"
            type={{type}}
            minlength={{minlength}}
            maxlength={{maxlength}}
            required
          />
          <span class="input__text">{{helperText}}</span>
        </label>
        <p class="input__helper-text"></p>
      </fieldset>
    `;
  }
}
