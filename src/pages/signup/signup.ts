import Block from 'core/Block';
import './signup.css';
import { Input } from 'utils/Input';
import { FormValidator } from 'utils/FormValidator';
import { config } from 'utils/constants';

export class SignupPage extends Block {
  protected getStateFromProps() {
    this.state = {
      handleChangeInput: (evt: Event) => {
        evt.target && new Input(config, evt.target).checkOnValueInput();
      },
      hendleSubmitForm: (evt: Event) => {
        evt.preventDefault();

        if (FormValidator.checkStateForm('signup')) {
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
          <form class="signup" name="signup">
            <h1 class="signup__title">Регистрация</h1>
            {{{InputWrapper onInput=handleChangeInput type="email" helperText="Почта" name="email"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Логин" minlength="3" maxlength="20" name="login"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Имя" minlength="1" maxlength="50" name="name"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Фамилия" minlength="1" maxlength="50" name="lastName"}}}
            {{{InputWrapper onInput=handleChangeInput type="text" helperText="Телефон" minlength="10" maxlength="15" name="phone"}}}
            {{{InputWrapper onInput=handleChangeInput type="password" helperText="Пароль" minlength="8" maxlength="40" name="password"}}}
            {{{InputWrapper onInput=handleChangeInput type="password" helperText="Пароль (ещё раз)" minlength="8" maxlength="40" classes="input_is-auth" name="repeatPassword"}}}
            {{{Button onClick=hendleSubmitForm textBtn="Зарегистрироваться" type="submit" classes="button_is-auth"}}}
            <a class="signup__link" href="/">Войти</a>
          </form>
        </main>
      </div>
    `;
  }
}
