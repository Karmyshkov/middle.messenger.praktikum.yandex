import Block from 'core/Block';
import './menu.css';
import { MenuProps } from './types';

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
                <img class="menu__icon" src="../image/plus.svg" alt="Иконка плюса" />
                Добавить пользователя
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_delete-user" type="button">
                <img class="menu__icon" src="../image/close.svg" alt="Иконка крестика" />
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
                <img class="menu__icon" src="../image/photo.svg" alt="Иконка плюса" />
                Фото или Видео
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-file" type="button">
                <img class="menu__icon" src="../image/file.svg" alt="Иконка крестика" />
                Файл
              </button>
            </li>
            <li class="menu__item">
              <button class="menu__btn menu__btn_add-location" type="button">
                <img class="menu__icon" src="../image/location.svg" alt="Иконка крестика" />
                Локация
              </button>
            </li>
          </ul>
        </nav>
      {{/if}}
    `;
  }
}
