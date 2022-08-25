import { Block, BrowseRouter as router } from 'core';
import 'styles/auth.css';
import { FormValidator } from 'utils/classes';
import { config, FORM_ELEMENTS, PATHNAMES } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils';
import { authService } from 'services';
import { SigninType } from 'types';

const signinFormValidator = new FormValidator(
  config,
  FORM_ELEMENTS.AUTH_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class SigninPage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.redirectUser();
  }

  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        signinFormValidator.clearError();
        signinFormValidator.toggleBtnState();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: signinFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: FORM_ELEMENTS.AUTH_FORM,
          disableBtn: signinFormValidator.disableBtn,
          addErors: signinFormValidator.addErrorsForInput,
        });

        dataForm && authService.signin(dataForm as SigninType);
      },
      handleValidateInput: (evt: Event) => signinFormValidator.handleFieldValidation(evt),
      handleLinkBtn: () => router.go(PATHNAMES.SIGNUP_PATH),
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="signin" novalidate>
            <h1 class="auth__title">Вход</h1>
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Логин"
              minlength="3"
              maxlength="20"
              name="login"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              classes="input_is-auth"
              name="password"
            }}}
            {{{Button
              onClick=hendleSubmitForm
              textBtn="Авторизоваться"
              type="submit"
              classes="button_is-auth"
            }}}
            {{{AuthLink
              onClick=handleLinkBtn
              text="Нет аккаунта?"
            }}}
          </form>
        </main>
      </div>
    `;
  }
}
