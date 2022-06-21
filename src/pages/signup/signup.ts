import Block from 'core/Block';
import 'styles/auth.css';
import { config, SIGNUP_FORM } from 'utils/constants';
import { handleSubmitForm, checkOnValueInput, toggleBtnState } from 'utils/functions';

export class SignupPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        checkOnValueInput(evt);
        toggleBtnState(SIGNUP_FORM, config.btnSubmitFormSelector);
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm(
          SIGNUP_FORM,
          config.inputSelector,
          config.btnSubmitFormSelector,
          this.element
        );
      },
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
              type="email"
              helperText="Почта"
              name="email"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              type="text"
              helperText="Логин"
              minlength="3"
              maxlength="20"
              name="login"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              type="text"
              helperText="Имя"
              minlength="1"
              maxlength="50"
              name="name"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              type="text"
              helperText="Фамилия"
              minlength="1"
              maxlength="50"
              name="lastName"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              type="tel"
              helperText="Телефон"
              minlength="10"
              maxlength="15"
              name="phone"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
              type="password"
              helperText="Пароль"
              minlength="8"
              maxlength="40"
              name="password"
            }}}
            {{{InputWrapper
              onInput=handleChangeInput
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
            <a class="auth__link" href="/">Войти</a>
          </form>
        </main>
      </div>
    `;
  }
}
