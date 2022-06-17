import Block from "core/Block";
import "./signin.css";

interface ProfilePageProps {}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <ul class="profile">
        {{> btnBackProfile/btnBackProfile href="./chat.hbs"}}
        <li class="profile__column">
          <form class="profile__form">
            {{> editAvatar/editAvatar}}
            <p class="profile__user-name">Иван</p>
            <ul class="profile__list">
              {{> inputProfile/inputProfile type="email" helperText="Почта" value=profile.payload.email}}
              {{> inputProfile/inputProfile type="text" helperText="Логин" value=profile.payload.name}}
              {{> inputProfile/inputProfile type="text" helperText="Имя" value=profile.payload.name}}
              {{> inputProfile/inputProfile type="text" helperText="Фамилия" value=profile.payload.lastName}}
              {{> inputProfile/inputProfile type="text" helperText="Имя в чате" value=profile.payload.chatName}}
              {{> inputProfile/inputProfile type="phone" helperText="Телефон" value=profile.payload.phone}}
            </ul>
            <ul class="profile__list">
              {{> btnProfile/btnProfile href="./editProfile.hbs"  text="Изменить данные" classes="btn-profile__link_color_red"}}
              {{> btnProfile/btnProfile href="./ediPassword.hbs" text="Изменить пароль" classes="btn-profile__link_color_red"}}
              {{> btnProfile/btnProfile href="./index.hbs" text="Выйти" classes="btn-profile__link_color_blue"}}
            </ul>
          </form>
        </li>
      </ul>
    `;
  }
}