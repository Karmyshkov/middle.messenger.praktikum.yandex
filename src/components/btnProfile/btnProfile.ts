import Block from 'core/Block';
import './btnProfile.css';
import { BtnProfileProps } from './types';

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
