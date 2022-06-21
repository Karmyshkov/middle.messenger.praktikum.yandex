import Block from 'core/Block';
import 'styles/auth.css';
import { Input } from 'utils/classes/Input';
import { FormValidator } from 'utils/classes/FormValidator';
import { config } from 'utils/constants';

export class SigninPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();

        if (FormValidator.checkStateForm('signin')) {
          const inputs = this.element?.querySelectorAll('.input__text-field');
          let dataForm = {};

          inputs?.forEach((input) => {
            const inputElement = input as HTMLInputElement;
            dataForm = { ...dataForm, [inputElement.name]: inputElement.value };
          });
          console.log(dataForm);
        }
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
