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
  isActiveChatSelector: 'list-item_is-active',
  hiddenChatSelecor: 'chat__column_is-hidden',
  burgerMenuSelector: 'burger-menu',
  isActiveBurgerMenuSelector: 'burger-menu_active',
  isOpenPopupSelector: 'popup_opened',
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
  usersSelector: 'users',
  userItemSelector: 'user-item',
  userItemWrapperSelector: 'user-item__wrapper',
  userItemAvatarSelector: 'user-item__avatar',
  userItemLoginSelector: 'user-item__text-login',
  userItemTextEmailSelector: 'user-item__text-email',
  userItemBtnSelector: 'user-item__btn',
  tooltipSelector: 'tooltip',
  tooltipIsSuccessSelector: 'tooltip_is-success',
  tooltipIsErrorSelector: 'tooltip_is-error',
  chatFooterInputSelector: 'chat-footer__input',
};

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTH = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентебря',
  'октября',
  'ноября',
  'декабря',
];

const PATHNAMES = {
  SIGNIN_PATH: '/',
  MESSAGER_PATH: '/messenger',
  SIGNUP_PATH: '/sign-up',
  SETTINGS_PATH: '/settings',
  EDIT_SETTINGS_PATH: '/edit-settings',
  EDIT_PASSWORD_PATH: '/edit-password',
  PATH_NOT_FOUND: '/path-not-found',
};

const ACTIONS_WEBSOCKET = {
  OPEN: 'open',
  CLOSE: 'close',
  MESSAGE: 'message',
  ERROR: 'error',
};

const TYPES_MESSAGE_WEBSOCKET = {
  PING: 'ping',
  PONG: 'pong',
  MESSAGE: 'message',
  GET_OLD: 'get old',
};

const MESSAGES = {
  SUCCESS_SIGNUP_MESSAGE: 'Вы успешно зарегистрировались!',
  SUCCESS_SIGNIN_MESSAGE: 'Вы успешно вошли в приложение!',
  SUCCESS_CREATE_MESSAGE: 'Создан чат!',
  SUCCESS_CHANGE_AVATAR_MESSAGE: 'Аватар изменен!',
  SUCCESS_CHANGE_USER_INFO_MESSAGE: 'Информация пользователя изменена!',
  SUCCESS_REMOVE_CHAT_MESSAGE: 'Чат удален!',
  SUCCESS_ADD_USER_TO_CHAT_MESSAGE: 'Пользователь добавлен в чат!',
  SUCCESS_REMOVE_USER_FROM_CHAT: 'Пользователь удален из чата!',
  CONNECTION_PROBLEMS: 'Проблемы с подключением',
  IS_NOT_MATCHED_PASSWORD_MESSAGE: 'Пароли не совпадают!',
};

const REGEXP = {
  REGEXP_FOR_NAME_AND_LASTNAME: /^[A-Z | А-Я | -]/,
  REGEXP_FOR_PHONE: /^((\+7|7|8)+([0-9]){10})$/,
};

const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const BASE_URL_RESOURCES = 'https://ya-praktikum.tech/api/v2/resources';
const BASE_URL_WSS = 'wss://ya-praktikum.tech/ws/chats';
const BASE_HEADERS = { 'Content-Type': 'application/json' };

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

const DATA_ATTRIBUTE_CHAT_ID = 'data-chat-id';
const DATA_ATTRIBUTE_USER_ID = 'data-user-id';

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
  BASE_URL,
  BASE_URL_RESOURCES,
  BASE_HEADERS,
  PATHNAMES,
  BASE_URL_WSS,
  DATA_ATTRIBUTE_CHAT_ID,
  DATA_ATTRIBUTE_USER_ID,
  DAYS,
  MONTH,
  ACTIONS_WEBSOCKET,
  TYPES_MESSAGE_WEBSOCKET,
  MESSAGES,
  REGEXP,
};
