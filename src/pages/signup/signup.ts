import { Block, BrowseRouter as router } from 'core';
import 'styles/auth.css';
import { FormValidator } from 'utils/classes';
import { config, AUTH_FORM, PATHNAMES } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils';
import { authService } from 'services';
import { SignupType } from 'types';

const signupFormValidator = new FormValidator(
  config,
  AUTH_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector,
  config.inputHelperTextSelector,
  config.isShowHelperTextSelector
);

export class SignupPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        signupFormValidator.clearError();
        signupFormValidator.toggleBtnState();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        const dataForm = handleSubmitForm({
          stateForm: signupFormValidator.checkStateForm(),
          inputSelector: config.inputSelector,
          formSelector: AUTH_FORM,
          disableBtn: signupFormValidator.disableBtn,
          addErors: signupFormValidator.addErrorsForInput,
          isValidField: signupFormValidator.isValidFieldWithCustomRules(),
        });

        dataForm && authService.signup(dataForm as SignupType);
      },

      handleValidateInput: (evt: Event) => {
        signupFormValidator.handleFieldValidation(evt);
      },
      handleLinkBtn: () => router.go(PATHNAMES['SIGNIN_PATH']),
    };
  }

  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="signup" novalidate>
            <h1 class="auth__title">Регистрация</h1>
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="email"
              helperText="Почта"
              name="email"
            }}}
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
              type="text"
              helperText="Имя"
              minlength="1"
              maxlength="50"
              name="first_name"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="text"
              helperText="Фамилия"
              minlength="1"
              maxlength="50"
              name="second_name"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="tel"
              helperText="Телефон"
              minlength="10"
              maxlength="15"
              name="phone"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              name="password"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              onFocus=handleValidateInput
              onBlur=handleValidateInput
              type="password"
              helperText="Пароль (ещё раз)"
              minlength="8"
              maxlength="40"
              classes="input_is-auth"
              name="repeatPassword"
            }}}
            {{{Button
              onClick=hendleSubmitForm
              textBtn="Зарегистрироваться"
              type="submit"
              classes="button_is-auth"
            }}}
            {{{AuthLink
              onClick=handleLinkBtn
              text="Войти?"
            }}}
          </form>
        </main>
      </div>
    `;
  }
}
