import Block from 'core/Block';
import './menu.css';
import { MenuProps } from './types';
import plus from 'img/plus.svg';
import close from 'img/close.svg';
import photo from 'img/photo.svg';
import file from 'img/file.svg';
import location from 'img/location.svg';

export class Menu extends Block {
  constructor({ isUser }: MenuProps) {
    super({ isUser });
  }
  protected getStateFromProps(props: MenuProps): void {
    this.state = {
      isUser: props.isUser,
    };
  }
  protected render(): string {
    // language=hbs
    return `
      {{#if ${this.state.isUser}}}
        <nav class="menu menu__list_element_user">
          <ul class="menu__list">
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-user" type="button">
                <img class="menu__icon" src="${plus}" alt="Иконка плюса" />
                Добавить пользователя
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_delete-user" type="button">
                <img class="menu__icon" src="${close}" alt="Иконка крестика" />
                Удалить пользователя
              </button>
            </li>
          </ul>
        </nav>
      {{else}}
        <nav class="menu menu__list_element_file">
          <ul class="menu__list">
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-photo" type="button">
                <img class="menu__icon" src="${photo}" alt="Иконка плюса" />
                Фото или Видео
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-file" type="button">
                <img class="menu__icon" src="${file}" alt="Иконка крестика" />
                Файл
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-location" type="button">
                <img class="menu__icon" src="${location}" alt="Иконка крестика" />
                Локация
              </button>
            </li>
          </ul>
        </nav>
      {{/if}}
    `;
  }
}
