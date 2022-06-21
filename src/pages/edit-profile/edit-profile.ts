import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes/Popup';
import { FormValidator } from 'utils/classes/FormValidator';
import { config, EDIT_PROFILE_FORM } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils/functions';
import dataProfile from 'data/profile.json';

const editProfileformValidator = new FormValidator(
  config,
  EDIT_PROFILE_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector
);

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
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        editProfileformValidator.toggleBtnState();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm(
          editProfileformValidator.checkStateForm(),
          config.inputProfileSelector,
          this.element,
          {
            disableBtn: editProfileformValidator.disableBtn,
            addErors: editProfileformValidator.addErorsForDefaultForm,
          }
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
              class="profile__form profile__form_el_edit-form"
              novalidate
            >
              {{{EditAvatar onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  type="email"
                  helperText="Почта"
                  value="${email}"
                  name="email"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Логин"
                  value="${login}"
                  minlength="3"
                  maxlength="20"
                  name="login"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя"
                  value="${name}"
                  minlength="1"
                  maxlength="50"
                  name="name"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Фамилия"
                  value="${lastName}"
                  minlength="1"
                  maxlength="50"
                  name="lastName"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  type="tel"
                  helperText="Телефон"
                  value="${phone}"
                  minlength="10"
                  maxlength="15"
                  name="phone"
                  formName="profile__form_el_edit-form"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя в чате"
                  value="${chatName}"
                  minlength="1"
                  maxlength="50"
                  name="chatName"
                  formName="profile__form_el_edit-form"
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
