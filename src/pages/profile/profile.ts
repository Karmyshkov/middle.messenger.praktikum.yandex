import Block from 'core/Block';
import 'styles/profile.css';
//import dataProfile from 'data/profile.json';
import { Popup } from 'utils/classes';
import { config } from 'utils/constants';
import store, { STORE_EVENTS } from 'core/Store';
import { authService } from 'services';

//const { email, login, name, lastName, chatName, phone } = dataProfile.payload;

export class ProfilePage extends Block {
  constructor(...args: any) {
    super(...args);

    authService.getInfo();

    store.on(STORE_EVENTS.UPDATE, () => {
      this.setProps(store.getState());
    });
  }

  protected getStateFromProps() {
    this.state = {
      handleEditAvatar: () => {
        new Popup(
          config.popupChangeAvatarSelector,
          config.editAvatarSelector,
          config.isOpenPopupSelecot,
          config
        ).handleOpenPopup();
      },
      handleSubmitEditAvatarForm: (evt: Event) => {
        evt.preventDefault();
        console.log('test');
      },
      handleSignOut: (evt: Event) => {
        evt.preventDefault();
        authService.signout();
      },
    };
  }
  render() {
    const { userInfo = [] } = this.props;
    const { avatar, display_name, email, first_name, id, login, phone, second_name } =
      userInfo;
    // language=hbs
    return `
      <div class="profile">
        <ul class="profile__wrapper">
          {{{BtnBackProfile href="/chat"}}}
          <li class="profile__column">
            <form class="profile__form">
              {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="email"
                  helperText="Почта"
                  value="${email}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Логин"
                  value="${login}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя"
                  value="${first_name}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Фамилия"
                  value="${second_name}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя в чате"
                  value="${display_name ? display_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="tel"
                  helperText="Телефон"
                  value="${phone}"
                }}}
              </ul>
              <ul class="profile__list">
                {{{BtnProfile
                  href="/edit-settings"
                  text="Изменить данные"
                  classes="btn-profile__link_color_red"
                  type="link"
                }}}
                {{{BtnProfile
                  href="/edit-password"
                  text="Изменить пароль"
                  classes="btn-profile__link_color_red"
                  type="link"
                }}}
                {{{BtnProfile
                  onClick=handleSignOut
                  text="Выйти"
                  classes="btn-profile__link_color_blue"
                  type="button"
                }}}
              </ul>
            </form>
          </li>
        </ul>
        {{{Popup
          onSubmit=handleSubmitEditAvatarForm
          title="Загрузите файл"
          textBtn="Поменять"
          classesPopup="popup_change-avatar"
          isDefault=false
        }}}
      </div>
    `;
  }
}
