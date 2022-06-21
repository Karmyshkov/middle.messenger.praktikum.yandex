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
        handleSubmitForm(
          EDIT_PASSWORD_FORM,
          config.inputProfileSelector,
          config.btnSubmitFormSelector,
          this.element
        );
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
            <form
              class="profile__form profile__form_el_edit-password-form"
              name="edit-password"
              novalidate
            >
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="password"
                  helperText="Старый пароль"
                  value="${dataProfile.payload.password}"
                  minlength="8"
                  maxlength="40"
                  name="oldPassword"
                  formName="edit-password"
                }}}
                {{{InputProfileWrapper
                  type="password"
                  helperText="Новый пароль"
                  value="12341234"
                  minlength="8"
                  maxlength="40"
                  name="newPassword"
                  formName="edit-password"
                }}}
                {{{InputProfileWrapper
                  type="password"
                  helperText="Повторите новый пароль"
                  value="12341234" minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="edit-password"
                }}}
                {{{Button
                  onClick=hendleSubmitForm
                  textBtn="Сохранить"
                  classes="button_page_edit-password"
                  type="submit"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          title="Загрузите файл"
          textBtn="Поменять"
          classesPopup="popup_change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}
