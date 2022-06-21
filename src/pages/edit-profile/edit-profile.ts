import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes/Popup';
import { config, EDIT_PROFILE_FORM } from 'utils/constants';
import { handleSubmitForm } from 'utils/functions';
import dataProfile from 'data/profile.json';

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class EditProfilePage extends Block {
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
        handleSubmitForm(EDIT_PROFILE_FORM, config.inputProfileSelector, this.element);
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
            <form class="profile__form" name="edit-profile" novalidate>
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="email"
                  helperText="Почта"
                  value="${email}"
                  name="email"
                  formName="edit-profile"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Логин"
                  value="${login}"
                  minlength="3"
                  maxlength="20"
                  name="login"
                  formName="edit-profile"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя"
                  value="${name}"
                  minlength="1"
                  maxlength="50"
                  name="name"
                  formName="edit-profile"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Фамилия"
                  value="${lastName}"
                  minlength="1"
                  maxlength="50"
                  name="lastName"
                  formName="edit-profile"
                }}}
                {{{InputProfileWrapper
                  type="phone"
                  helperText="Телефон"
                  value="${phone}"
                  minlength="10"
                  maxlength="15"
                  name="phone"
                  formName="edit-profile"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя в чате"
                  value="${chatName}"
                  minlength="1"
                  maxlength="50"
                  name="chatName"
                  formName="edit-profile"
                }}}
                {{{Button
                  onClick=hendleSubmitForm
                  textBtn="Сохранить"
                  classes="button_page_edit-profile"
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
