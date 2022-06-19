import Block from 'core/Block';
import './btnProfile.css';

interface BtnProfileProps {
  text: string;
  classes: string;
  href: string;
}

export class BtnProfile extends Block {
  constructor({ text, classes, href }: BtnProfileProps) {
    super({ text, classes, href });
  }

  protected render(): string {
    // language=hbs
    return `
      <li class="btn-profile">
        <a class="btn-profile__link {{classes}}" href={{href}}>
          {{text}}
        </a>
      </li>
    `;
  }
}
