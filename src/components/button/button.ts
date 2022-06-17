import Block from "core/Block";
import "./button.css";

interface ButtonProps {
  textBtn: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({ textBtn, onClick }: ButtonProps) {
    super({ textBtn, events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `<a href="{{href}}" class="button {{classes}}">{{textBtn}}</a>`;
  }
}
