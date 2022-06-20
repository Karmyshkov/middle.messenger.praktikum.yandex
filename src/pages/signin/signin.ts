import Block from 'core/Block';
import './signin.css';
import { Input } from 'utils/Input';
import { config } from 'utils/constants';

export class SigninPage extends Block {
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
          <form class="signin">
            <h1 class="signin__title">Вход</h1>
            {{{Input onChangeInput=handleChangeInput type="text" helperText="Логин" minlength="5" maxlength="20"}}}
            {{{Input onChangeInput=handleChangeInput type="password" helperText="Пароль" minlength="4" maxlength="20" classes="input_is-auth"}}}
            {{{Button href="/chat" textBtn="Авторизоваться"}}}
            <a class="signin__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
