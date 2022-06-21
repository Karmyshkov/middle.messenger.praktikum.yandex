import Block from 'core/Block';
import './edit-profile.css';
import { Popup } from 'utils/Popup';
import { FormValidator } from 'utils/FormValidator';
import { config } from 'utils/constants';
import dataProfile from 'data/profile.json';

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class EditProfilePage extends Block {
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

        if (FormValidator.checkStateForm('edit-profile')) {
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
          <li class="edit-profile__column">
            <form class="edit-profile__form" name="edit-profile" novalidate>
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="edit-profile__list">
                {{{InputProfile type="email" helperText="Почта" value="${email}" name="email"}}}
                {{{InputProfile type="text" helperText="Логин" value="${login}" minlength="3" maxlength="20" name="login"}}}
                {{{InputProfile type="text" helperText="Имя" value="${name}" minlength="1" maxlength="50" name="name"}}}
                {{{InputProfile type="text" helperText="Фамилия" value="${lastName}" minlength="1" maxlength="50" name="lastName"}}}
                {{{InputProfile type="phone" helperText="Телефон" value="${phone}" minlength="10" maxlength="15" name="phone"}}}
                {{{InputProfile type="text" helperText="Имя в чате" value="${chatName}" minlength="1" maxlength="50" name="chatName"}}}
                {{{Button onClick=hendleSubmitForm textBtn="Сохранить" classes="button_page_edit-profile" type="submit"}}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup title="Загрузите файл" textBtn="Поменять" classesPopup="popup_change-avatar" isDefault=false}}}
      </div>
    `;
  }
}
