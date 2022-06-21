import Block from 'core/Block';
import './inputProfileWrapper.css';
import { InputProfileWrapperProps } from './types';
import { toggleBtnState } from 'utils/functions';
import { config, EDIT_PROFILE_FORM } from 'utils/constants';

export class InputProfileWrapper extends Block {
  constructor({
    name,
    minlength,
    maxlength,
    type,
    value,
    helperText,
  }: InputProfileWrapperProps) {
    super({
      name,
      minlength,
      maxlength,
      type,
      value,
      helperText,
    });
  }
  protected getStateFromProps(props: InputProfileWrapperProps): void {
    this.state = {
      name: props.name,
      minlength: props.minlength,
      maxlength: props.maxlength,
      type: props.type,
      value: props.value,
      helperText: props.helperText,

      handleChangeInput: () => {
        console.log('asd');
        toggleBtnState(EDIT_PROFILE_FORM, config.btnSubmitFormSelector);
      },
    };
  }
  protected render(): string {
    const { name, minlength, maxlength, type, value, helperText } = this.state;
    // language=hbs
    return `
      <li class="input-profile-wrapper">
        <label class="input-profile-wrapper__label">
          {{{InputProfile
            onInput=handleChangeInput
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
