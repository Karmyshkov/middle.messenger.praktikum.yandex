import Block from 'core/Block';
import './inputWrapper.css';
import { InputWrapperProps } from './types';
import { FormValidator } from 'utils/FormValidator';
import { config } from 'utils/constants';

const formValidator = new FormValidator(config);

export class InputWrapper extends Block {
  constructor({
    name,
    type,
    helperText,
    minlength,
    maxlength,
    classes,
    onInput,
  }: InputWrapperProps) {
    super({
      name,
      type,
      helperText,
      minlength,
      maxlength,
      classes,
      events: { input: onInput },
    });
  }
  protected getStateFromProps(props: InputWrapperProps): void {
    this.state = {
      name: props.name,
      classes: props.classes,
      type: props.type,
      minlength: props.minlength,
      maxlength: props.maxlength,
      helperText: props.helperText,

      handleValidateInput: (evt: Event) => {
        formValidator.handleFieldValidation(evt);
      },

      handleClearError: () => {
        formValidator.clearError();
      },
    };
  }
  protected render(): string {
    const { name, classes, type, minlength, maxlength, helperText } = this.state;
    // language=hbs
    return `
      <fieldset class="input ${classes ? classes : ''}">
        <label class="input__label">
          {{{Input
            onInput=handleClearError
            onFocus=handleValidateInput
            onBlur=handleValidateInput
            type="${type}"
            minlength="${minlength}"
            maxlength="${maxlength}"
            name="${name}"
          }}}
          <span class="input__text">${helperText}</span>
        </label>
        <p class="input__helper-text"></p>
      </fieldset>
    `;
  }
}
