const config = {
  inputSelector: 'input__text-field',
  inputPasswordSelector: "input[type='password']",
  inputErrorSelector: 'input__text_error',
  inputHelperTextSelector: 'input__helper-text',
  isShowHelperTextSelector: 'input__helper-text_show',
  btnSubmitFormSelector: 'button',
  isDisableBtnSubmitSelector: 'button_disable',
  labelTextSelector: 'input__text',
  isValuelabelTextSelector: 'input__text_isValue',
  messagesSelector: 'list-item',
  contentDefaultSelector: 'chat__column-default',
  contentDialodSelector: 'chat__column-dialog',
  popupAddUserSelector: 'popup_add-user',
  popupDeleteUserSelector: 'popup_delete-user',
  popupChangeAvatarSelector: 'popup_change-avatar',
  popupAddChatSelector: 'popup_add-chat',
  isActiveChatSelector: 'chat_is-active',
  hiddenChatSelecor: 'chat__column_is-hidden',
  burgerMenuSelector: 'burger-menu',
  isActiveBurgerMenuSelector: 'burger-menu_active',
  isOpenPopupSelecot: 'popup_opened',
  popoverSelector: 'popover',
  btnAttachSelector: 'chat-footer__btn-attach',
  isShowPopoverSelector: 'popover_is-show',
  menuItemSelector: 'menu__item',
  popupСontainerSelector: 'popup__container',
  editAvatarSelector: 'edit-avatar',
  editAvatarTextSelector: 'edit-avatar__span',
  menuListElementUserSelector: 'menu__list_element_user',
  menuListElementFileSelector: 'menu__list_element_file',
  menuClassSelector: 'menu',
  isShowMenuSelecor: 'menu_is-show',
  menuBtnSelector: 'menu-button',
  searchInputByChatsSelector: 'input-chat',
  imgFromSearchInputByChatsSelector: 'search-chat__img',
  inputProfileSelector: 'input-profile',
  menuBtnAddUserSelector: 'menu__btn_add-user',
  menuBtnDeleteUserSelector: 'menu__btn_delete-user',
  inputProfileHelperTextSelector: 'input-profile-wrapper__error',
  isShowInputProfileHelperTextSelector: 'input-profile-wrapper__error_is-show',
  addChatBtnSelector: 'search-chat__btn',
};

const REGEXP_FOR_NAME_AND_LASTNAME = /^[A-Z | А-Я | -]/;
const REGEXP_FOR_PHONE = /^((\+7|7|8)+([0-9]){10})$/;
const REGEXP_REPLACE_PATHNAME = /\/\d+/;
const REGEXP_REPLACE_ID = /[a-z/]+/i;

const ADD_CHAT_FORM = 'popup__form_add-chat';
const ADD_USER_FORM = 'popup__form_add-user';
const DELETE_USER_FORM = 'popup__form_delete-user';
const SIGNIN_FORM = 'signin';
const SIGNUP_FORM = 'signup';
const EDIT_PASSWORD_FORM = 'profile__form_el_edit-password-form';
const EDIT_PROFILE_FORM = 'profile__form_el_edit-form';
const AUTH_FORM = 'auth';
const USER_NAME_FIELD = 'first_name';
const LAST_NAME_USER_FIELD = 'second_name';
const PHONE_USER_FIELD = 'phone';
const CUSTOM_ERROR_FOR_NAME_AND_LASTNAME =
  'Имя / Фамилия должны начинаться с загловной буквы или с "-"';
const CUSTOM_ERROR_FOR_PHONE_FILED = 'Не корректный формат';
const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const BASE_HEADERS = { 'Content-Type': 'application/json' };
const SUCCESS_SIGNUP_MESSAGE = 'Вы успешно зарегистрировались!';
const SUCCESS_SIGNIN_MESSAGE = 'Вы успешно вошли в приложение!';

export {
  config,
  ADD_CHAT_FORM,
  ADD_USER_FORM,
  DELETE_USER_FORM,
  SIGNIN_FORM,
  SIGNUP_FORM,
  EDIT_PASSWORD_FORM,
  EDIT_PROFILE_FORM,
  AUTH_FORM,
  USER_NAME_FIELD,
  LAST_NAME_USER_FIELD,
  PHONE_USER_FIELD,
  CUSTOM_ERROR_FOR_NAME_AND_LASTNAME,
  CUSTOM_ERROR_FOR_PHONE_FILED,
  REGEXP_FOR_NAME_AND_LASTNAME,
  REGEXP_FOR_PHONE,
  REGEXP_REPLACE_PATHNAME,
  REGEXP_REPLACE_ID,
  BASE_URL,
  BASE_HEADERS,
  SUCCESS_SIGNUP_MESSAGE,
  SUCCESS_SIGNIN_MESSAGE,
};
