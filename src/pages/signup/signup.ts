import Block from "core/Block";
import "./signup.css";

interface SignupPageProps {}

export class SignupPage extends Block {
  constructor(props: SignupPageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="signup">
            <h1 class="signup__title">Регистрация</h1>
            {{{Input type="email" helperText="Почта"}}}
            {{{Input type="text" helperText="Логин" minlength="5" maxlength="20"}}}
            {{{Input type="text" helperText="Имя" minlength="1" maxlength="50"}}}
            {{{Input type="text" helperText="Фамилия" minlength="1" maxlength="50"}}}
            {{{Input type="password" helperText="Пароль" minlength="4" maxlength="20"}}}
            {{{Input type="password" helperText="Пароль (ещё раз)" minlength="4" maxlength="20" classes="input_is-auth"}}}
            {{{Button href="/" textBtn="Зарегистрироваться"}}}
            <a class="signup__link" href="/">Войти</a>
          </form>
        </main>
      </div>
    `;
  }
}
