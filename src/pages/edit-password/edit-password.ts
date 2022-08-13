import { Block, store, BrowseRouter as router } from 'core';
import 'styles/profile.css';
import { Popup, FormValidator } from 'utils/classes';
import {
  config,
  EDIT_PASSWORD_FORM,
  IS_NOT_MATCHED_PASSWORD_MESSAGE,
} from 'utils/constants';
import { handleSubmitForm, showTooltip, checkIsLoginIn } from 'utils';
import { authService, profileService } from 'services';
import { UserPasswordType, STORE_EVENTS } from 'types';

const editPassowrdformValidator = new FormValidator(
  config,
  EDIT_PASSWORD_FORM,
  config.inputProfileSelector,
  config.btnSubmitFormSelector,
  config.inputProfileHelperTextSelector,
  config.isShowInputProfileHelperTextSelector
);

export class EditPasswordPage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }

  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelector,
          config
        ).handleOpenPopup();
      },
      handleChangeInput: () => {
        editPassowrdformValidator.clearError();
        editPassowrdformValidator.toggleBtnState();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: editPassowrdformValidator.checkStateForm(),
          inputSelector: config.inputProfileSelector,
          formSelector: EDIT_PASSWORD_FORM,
          disableBtn: editPassowrdformValidator.disableBtn,
          addErors: editPassowrdformValidator.addErrorsForInput,
        });

        if (dataForm) {
          const { oldPassword, newPassword, repeatPassword } =
            dataForm as UserPasswordType;

          newPassword !== repeatPassword
            ? showTooltip({
                text: IS_NOT_MATCHED_PASSWORD_MESSAGE,
                type: 'error',
              })
            : profileService.changeUserPassword({
                newPassword,
                oldPassword,
              } as UserPasswordType);
        }
      },
      handleValidateInput: (evt: Event) => {
        editPassowrdformValidator.handleFieldValidation(evt);
      },
      handleBackBtn: () => router.back(),
    };
  }
  render() {
    checkIsLoginIn();

    const { userInfo = [] } = this.props;
    const { avatar, display_name } = userInfo;

    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
        {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile__column">
            <form
              class="profile__form profile__form_el_edit-password-form"
              novalidate
            >
              {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile__user-name">${display_name ? display_name : ''}</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Старый пароль"
                  value=""
                  minlength="8"
                  maxlength="40"
                  name="oldPassword"
                  formName="profile__form_el_edit-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Новый пароль"
                  value=""
                  minlength="8"
                  maxlength="40"
                  name="newPassword"
                  formName="profile__form_el_edit-password-form"
                }}}
                {{{InputProfileWrapper
                  onInput=handleChangeInput
                  onFocus=handleValidateInput
                  onBlur=handleValidateInput
                  type="password"
                  helperText="Повторите новый пароль"
                  value="" minlength="8"
                  maxlength="40"
                  name="repeatPassword"
                  formName="profile__form_el_edit-password-form"
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
