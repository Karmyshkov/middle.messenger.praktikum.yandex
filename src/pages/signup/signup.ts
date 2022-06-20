import Block from 'core/Block';
import './signup.css';
import { Input } from 'utils/Input';
import { config } from 'utils/constants';

export class SignupPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
    };
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="signup">
            <h1 class="signup__title">Регистрация</h1>
            {{{InputWrapper onInput=handleChangeInput type="email" helperText="Почта"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Логин" minlength="3" maxlength="20"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Имя" minlength="1" maxlength="50"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Фамилия" minlength="1" maxlength="50"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Телефон" minlength="10" maxlength="15"}}}
            {{{InputWrapper onInput=handleChangeInput type="password" helperText="Пароль" minlength="8" maxlength="40"}}}
            {{{InputWrapper onInput=handleChangeInput type="password" helperText="Пароль (ещё раз)" minlength="8" maxlength="40" classes="input_is-auth"}}}
            {{{Button href="/" textBtn="Зарегистрироваться"}}}
            <a class="signup__link" href="/">Войти</a>
          </form>
        </main>
      </div>
    `;
  }
}
