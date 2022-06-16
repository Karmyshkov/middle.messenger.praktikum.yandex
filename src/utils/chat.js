const chat = new Chat(chatConfig)
chat.addEventListeners()

const addUserFormValidator = new FormValidator(
  inputValidateConfig,
  "popup__form_add-user"
)
addUserFormValidator.enableValidation()

const deleteUserFormValidator = new FormValidator(
  inputValidateConfig,
  "popup__form_delete-user"
)
deleteUserFormValidator.enableValidation()

const menuUser = new Popup(
  "menu__list_element_user",
  "burger-menu",
  "menu_is-show",
  chatConfig
)
menuUser.addEventListeners()

const fileMenu = new Popup(
  "menu__list_element_file",
  "chat-footer__btn-attach",
  "menu_is-show",
  chatConfig
)
fileMenu.addEventListeners()

const addUserPopup = new Popup(
  "popup_add-user",
  "menu__btn_add-user",
  "popup_opened",
  chatConfig
)
addUserPopup.addEventListeners()

const deleteUserPopup = new Popup(
  "popup_delete-user",
  "menu__btn_delete-user",
  "popup_opened",
  chatConfig
)
deleteUserPopup.addEventListeners()

const addUserFormInput = new Input(inputValidateConfig, "popup__form_add-user")
addUserFormInput.checkOnValueInput()

const deleteUserFormInput = new Input(inputValidateConfig, "popup__form_delete-user")
deleteUserFormInput.checkOnValueInput()
