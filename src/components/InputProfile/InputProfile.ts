import Block from "core/Block";
import "./InputProfile.css";
import { InputTypeEnum } from "types";

interface InputProfileProps {
  type: InputTypeEnum;
  value: string;
  helperText: string;
}

export class InputProfile extends Block {
  constructor({ type, value, helperText }: InputProfileProps) {
    super({ type, value, helperText });
  }

  protected render(): string {
    // language=hbs
    return `
      <li class="input-profile">
        <label class="input-profile__label">
          <input class="input-profile__input" type="{{type}}" value="{{value}}" />
          <span class="input-profile__span">{{helperText}}</span>
        </label>
      </li>
    `;
  }
}
