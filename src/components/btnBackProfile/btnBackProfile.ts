import Block from 'core/Block';
import './btnBackProfile.css';
import { BtnBackProfileProps } from './types';
import left_arrow from 'img/left-arrow.svg';

export class BtnBackProfile extends Block {
  constructor({ href }: BtnBackProfileProps) {
    super({ href });
  }
  protected render(): string {
    // language=hbs
    return `
      <li class="profile-btn">
        <a href="{{href}}" class="profile-btn__link" aria-label="Вернуться назад">
          <div class="profile-btn__wrap">
            <img
              class="profile__icon"
              src="${left_arrow}"
              alt="Иконка вернуться назад"
            />
          </div>
        </a>
      </li>
    `;
  }
}
