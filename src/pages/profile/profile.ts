import Block from 'core/Block';
import 'styles/profile.css';
import { Popup } from 'utils/classes';
import { config, REGEXP_IS_NOT_INPUT_AVATAR } from 'utils/constants';
import store, { STORE_EVENTS } from 'core/Store';
import { authService, profileService } from 'services';
import { BrowseRouter as router } from 'core';

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
        const target = evt.target as HTMLInputElement;

        if (
          !Array.from(target.classList).some((element) =>
            REGEXP_IS_NOT_INPUT_AVATAR.test(element)
          )
        ) {
          evt.preventDefault();

          const editForm = document.forms[1];
          const formData = new FormData(editForm);
          profileService.changeAvatar(formData);
        }
      },
      handleSignOut: (evt: Event) => {
        evt.preventDefault();
        authService.signout();
      },
      handleBackBtn: () => router.back(),
      handleLinkToChangeProfile: () => router.go('/edit-settings'),
      handleLinkToChangePassword: () => router.go('/edit-password'),
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
          {{{BtnBackProfile onClick=handleBackBtn}}}
          <li class="profile__column">
            <form class="profile__form">
              {{{EditAvatar avatar="${avatar}" onClick=handleEditAvatar}}}
              <p class="profile__user-name">Иван</p>
              <ul class="profile__list">
                {{{InputProfileWrapper
                  type="email"
                  helperText="Почта"
                  value="${email ? email : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Логин"
                  value="${login ? login : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя"
                  value="${first_name ? first_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Фамилия"
                  value="${second_name ? second_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="text"
                  helperText="Имя в чате"
                  value="${display_name ? display_name : ''}"
                }}}
                {{{InputProfileWrapper
                  type="tel"
                  helperText="Телефон"
                  value="${phone ? phone : ''}"
                }}}
              </ul>
              <ul class="profile__list">
                {{{BtnProfile
                  onClick=handleLinkToChangeProfile
                  text="Изменить данные"
                  classes="btn-profile__link_color_red"
                  type="link"
                }}}
                {{{BtnProfile
                  onClick=handleLinkToChangePassword
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
          name="editAvatar"
        }}}
      </div>
    `;
  }
}
