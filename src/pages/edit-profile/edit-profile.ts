import Block from 'core/Block';
import './edit-profile.css';
import dataProfile from 'data/profile.json';

const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class EditProfilePage extends Block {
  render() {
    // language=hbs
    return `
      <ul class="edit-profile">
        {{{BtnBackProfile href="/profile"}}}
        <li class="edit-profile__column">
          <form class="edit-profile__form">
            {{{EditAvatar}}}
            <p class="profile__user-name">Иван</p>
            <ul class="edit-profile__list">
              {{{InputProfile type="email" helperText="Почта" value="${email}"}}}
              {{{InputProfile type="text" helperText="Логин" value="${login}"}}}
              {{{InputProfile type="text" helperText="Имя" value="${name}"}}}
              {{{InputProfile type="text" helperText="Фамилия" value="${lastName}"}}}
              {{{InputProfile type="text" helperText="Имя в чате" value="${chatName}"}}}
              {{{InputProfile type="phone" helperText="Телефон" value="${phone}"}}}
              {{{Button textBtn="Сохранить" classes="button_page_edit-profile" type="submit"}}}
            </ul>
          </form>
        </li>
      </ul>
    `;
  }
}
