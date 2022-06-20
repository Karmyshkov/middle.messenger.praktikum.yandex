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
  protected getStateFromProps(props: InputWrapperProps): void {
    this.state = {
      classes: props.classes,
      type: props.type,
      minlength: props.minlength,
      maxlength: props.maxlength,
      helperText: props.helperText,
    };
  }
  protected render(): string {
    const { classes, type, minlength, maxlength, helperText } = this.state;
    // language=hbs
    return `
      <fieldset class="input ${classes}">
        <label class="input__label">
          {{{Input
            type="${type}"
            minlength="${minlength}"
            maxlength="${maxlength}"
          }}}
          <span class="input__text">${helperText}</span>
        </label>
        <p class="input__helper-text"></p>
      </fieldset>
    `;
  }
}
