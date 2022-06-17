import Block from "core/Block";
import "./input.css";

interface InputProps {
  onChange?: () => void;
  type?: "text" | "password" | "email";
  helperText: string;
  minlength?: number;
  maxlength?: number;
  classes?: string;
}

export class Input extends Block {
  constructor({
    type = "text",
    minlength,
    maxlength,
    classes,
    onChange = () => console.log("test"),
  }: InputProps) {
    super({ type, minlength, maxlength, classes, events: { input: onChange } });
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
