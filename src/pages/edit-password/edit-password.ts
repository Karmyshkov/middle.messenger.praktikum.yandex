import Block from 'core/Block';
import './edit-password.css';
import dataProfile from 'data/profile.json';

export class EditPasswordPage extends Block {
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
              {{{InputProfile type="password" helperText="Старый пароль" value="${dataProfile.payload.password}"}}}
              {{{InputProfile type="password" helperText="Новый пароль" value="1234"}}}
              {{{InputProfile type="password" helperText="Повторите новый пароль" value="1234"}}}
              {{{Button typeBtn="submit" textBtn="Сохранить" classes="button_page_edit-password"}}}
            </ul>
          </form>
        </li>
      </ul>
    `;
  }
}
