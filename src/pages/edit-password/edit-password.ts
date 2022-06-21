import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes/Popup';
import { FormValidator } from 'utils/classes/FormValidator';
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
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();

        if (FormValidator.checkStateForm('edit-password')) {
          const inputs = this.element?.querySelectorAll('.input-profile__input');
          let dataForm = {};

          inputs?.forEach((input) => {
            const inputElement = input as HTMLInputElement;
            dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
          });
          console.log(dataForm);
        }
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
                {{{InputProfile type="password" helperText="Старый пароль" value="${dataProfile.payload.password}" minlength="8" maxlength="40" name="oldPassword"}}}
                {{{InputProfile type="password" helperText="Новый пароль" value="1234" minlength="8" maxlength="40" name="newPassword"}}}
                {{{InputProfile type="password" helperText="Повторите новый пароль" value="1234" minlength="8" maxlength="40" name="repeatPassword"}}}
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
