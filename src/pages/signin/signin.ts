import Block from 'core/Block';
import 'styles/auth.css';
import { FormValidator } from 'utils/classes/FormValidator';
import { config, AUTH_FORM } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput } from 'utils/functions';

const formValidator = new FormValidator(
  config,
  AUTH_FORM,
  config.inputSelector,
  config.btnSubmitFormSelector
);

export class SigninPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        formValidator.clearError();
        formValidator.toggleBtnState();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();

        handleSubmitForm(
          formValidator.checkStateForm(),
          config.inputSelector,
          this.element,
          {
            disableBtn: formValidator.disableBtn,
            addErors: formValidator.addErors,
          }
        );
      },
      handleValidateInput: (evt: Event) => formValidator.handleFieldValidation(evt),
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
            <a class="auth__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
