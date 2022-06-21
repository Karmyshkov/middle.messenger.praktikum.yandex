import Block from 'core/Block';
import 'styles/auth.css';
import { Input } from 'utils/classes/Input';
import { config } from 'utils/constants';
import { handleSubmitForm } from 'utils/functions';

export class SigninPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();
        handleSubmitForm('signin', 'input__text-field', this.element);
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="auth" name="signin" novalidate>
            <h1 class="auth__title">Вход</h1>
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Логин" minlength="3" maxlength="20" name="login"}}}
            {{{InputWrapper onInput=handleChangeInput type="password" helperText="Пароль" minlength="8" maxlength="40" classes="input_is-auth" name="password"}}}
            {{{Button onClick=hendleSubmitForm textBtn="Авторизоваться" type="submit" classes="button_is-auth"}}}
            <a class="auth__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
