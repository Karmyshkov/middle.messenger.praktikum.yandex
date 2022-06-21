import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes/Popup';
import { config, EDIT_PASSWORD_FORM } from 'utils/constants';
import { handleSubmitForm } from 'utils/functions';
import dataProfile from 'data/profile.json';

export class EditPasswordPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelecot,
          config
        ).handleOpenPopup();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm(EDIT_PASSWORD_FORM, config.inputProfileSelector, this.element);
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/profile"}}}
          <li class="profile__column">
            <form class="profile__form" name="edit-password" novalidate>
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper type="password" helperText="Старый пароль" value="${dataProfile.payload.password}" minlength="8" maxlength="40" name="oldPassword"}}}
                {{{InputProfileWrapper type="password" helperText="Новый пароль" value="1234" minlength="8" maxlength="40" name="newPassword"}}}
                {{{InputProfileWrapper type="password" helperText="Повторите новый пароль" value="1234" minlength="8" maxlength="40" name="repeatPassword"}}}
                {{{Button onClick=hendleSubmitForm textBtn="Сохранить" classes="button_page_edit-password" type="submit"}}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup title="Загрузите файл" textBtn="Поменять" classesPopup="popup_change-avatar" isDefault=false}}}
      </div>
    `;
  }
}
