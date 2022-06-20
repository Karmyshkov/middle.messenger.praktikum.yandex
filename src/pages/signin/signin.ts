import Block from 'core/Block';
import './signin.css';
import { Input } from 'utils/Input';
import { FormValidator } from 'utils/FormValidator';
import { config } from 'utils/constants';

export class SigninPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
      handleValidateInput: (evt: Event) => {
        new FormValidator(config, 'signin').handleFieldValidation(evt);
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="signin">
            <h1 class="signin__title">Вход</h1>
            {{{InputWrapper onFocus=handleValidateInput onInput=handleChangeInput type="text" helperText="Логин" minlength="3" maxlength="20"}}}
            {{{InputWrapper onFocus=handleValidateInput onInput=handleChangeInput type="password" helperText="Пароль" minlength="8" maxlength="40" classes="input_is-auth"}}}
            {{{Button href="/chat" textBtn="Авторизоваться"}}}
            <a class="signin__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
