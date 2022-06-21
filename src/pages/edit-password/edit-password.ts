import Block from 'core/Block';
import './edit-password.css';
import { Popup } from 'utils/Popup';
import { config } from 'utils/constants';
import dataProfile from 'data/profile.json';

export class EditPasswordPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          'popup_change-avatar',
          'edit-avatar',
          'popup_opened',
          config
        ).handleOpenPopup();
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/profile"}}}
          <li class="edit-profile__column">
            <form class="edit-profile__form">
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="edit-profile__list">
                {{{InputProfile type="password" helperText="Старый пароль" value="${dataProfile.payload.password}"}}}
                {{{InputProfile type="password" helperText="Новый пароль" value="1234"}}}
                {{{InputProfile type="password" helperText="Повторите новый пароль" value="1234"}}}
                {{{Button textBtn="Сохранить" classes="button_page_edit-password" type="submit"}}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup title="Загрузите файл" textBtn="Поменять" classesPopup="popup_change-avatar" isDefault=false}}}
      </div>
    `;
  }
}
