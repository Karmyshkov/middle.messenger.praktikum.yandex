import Block from "core/Block";
import "./profile.css";
import dataProfile from "../../data/profile.json";

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

interface ProfilePageProps {}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super({ ...props });
  }
  render() {
    // language=hbs
    return `
      <ul class="profile">
        {{{BtnBackProfile href="/chat"}}}
        <li class="profile__column">
          <form class="profile__form">
            {{{EditAvatar}}}
            <p class="profile__user-name">Иван</p>
            <ul class="profile__list">
              {{{InputProfile type="email" helperText="Почта" value="${email}"}}}
              {{{InputProfile type="text" helperText="Логин" value="${login}"}}}
              {{{InputProfile type="text" helperText="Имя" value="${name}"}}}
              {{{InputProfile type="text" helperText="Фамилия" value="${lastName}"}}}
              {{{InputProfile type="text" helperText="Имя в чате" value="${chatName}"}}}
              {{{InputProfile type="phone" helperText="Телефон" value="${phone}"}}}
            </ul>
            <ul class="profile__list">
              {{{BtnProfile href="/edit-profile"  text="Изменить данные" classes="btn-profile__link_color_red"}}}
              {{{BtnProfile href="/edi-password" text="Изменить пароль" classes="btn-profile__link_color_red"}}}
              {{{BtnProfile href="/" text="Выйти" classes="btn-profile__link_color_blue"}}}
            </ul>
          </form>
        </li>
      </ul>
    `;
  }
}
