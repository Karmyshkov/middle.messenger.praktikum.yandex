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
