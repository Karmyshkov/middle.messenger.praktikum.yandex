import Block from "core/Block";
import "./button.css";

interface ButtonProps {
  textBtn: string;
  href: string;
  classes?: string;
}

export class Button extends Block {
  constructor({ textBtn, href, classes }: ButtonProps) {
    super({ textBtn, href, classes });
  }

  protected render(): string {
    // language=hbs
    return `<a href="{{href}}" class="button {{classes}}">{{textBtn}}</a>`;
  }
}
