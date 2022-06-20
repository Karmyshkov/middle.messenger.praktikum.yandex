import Block from 'core/Block';
import './input.css';
import { InputProps } from './types';

export class Input extends Block {
  constructor({
    type,
    helperText,
    minlength,
    maxlength,
    classes,
    onChangeInput,
  }: InputProps) {
    super({
      type,
      helperText,
      minlength,
      maxlength,
      classes,
      events: { input: onChangeInput },
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
