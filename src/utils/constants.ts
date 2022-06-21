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
};

const REGEXP_FOR_NAME_AND_LASTNAME = /^[A-Z | А-Я | -]/;
const REGEXP_FOR_PHONE = /^[\d|+]\d{9,15}/;

const ADD_USER_FORM = 'popup__form_add-user';
const DELETE_USER_FORM = 'popup__form_delete-user';
const SIGNIN_FORM = 'signin';
const SIGNUP_FORM = 'signup';
const EDIT_PASSWORD_FORM = 'profile__form_el_edit-password-form';
const EDIT_PROFILE_FORM = 'profile__form_el_edit-form';
const AUTH_FORM = 'auth';
const USER_NAME_FIELD = 'name';
const LAST_NAME_USER_FIELD = 'lastName';
const PHONE_USER_FIELD = 'phone';
const CUSTOM_ERROR_FOR_NAME_AND_LASTNAME =
  'Имя / Фамилия должны начинаться с загловной буквы или с "-"';
const CUSTOM_ERROR_FOR_PHONE_FILED = 'Не корректный формат';

export {
  config,
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
};
