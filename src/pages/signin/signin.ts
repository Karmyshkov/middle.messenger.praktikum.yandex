import Block from "core/Block";
import "./signin.css";

interface SigninPageProps {}

export class SigninPage extends Block {
  constructor(props: SigninPageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <div class="page">
        <main class="page__form">
          <form class="signin">
            <h1 class="signin__title">Вход</h1>
            {{{Input type="text" helperText="Логин" minlength="5" maxlength="20"}}}
            {{{Input type="password" helperText="Пароль" minlength="4" maxlength="20" classes="input_is-auth"}}}
            {{{Button href="./chat.hbs" textBtn="Авторизоваться"}}}
            <a class="signin__link" href="/signup">Нет аккаунта?</a>
          </form>
        </main>
      </div>
    `;
  }
}
