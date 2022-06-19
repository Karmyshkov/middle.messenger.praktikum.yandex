import Block from 'core/Block';
import './input.css';
import { InputTypeEnum } from 'types';

interface InputProps {
  onChange?: () => void;
  type: InputTypeEnum;
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}

export class Input extends Block {
  constructor({
    type,
    helperText,
    minlength,
    maxlength,
    classes,
    onChange = () => console.log('test'),
  }: InputProps) {
    super({
      type,
      helperText,
      minlength,
      maxlength,
      classes,
      events: { input: onChange },
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
