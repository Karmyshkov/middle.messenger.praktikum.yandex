const signinFormValidator = new FormValidator(inputValidateConfig, "signin")
signinFormValidator.enableValidation()

const signinInput = new Input(inputValidateConfig, "signin")
signinInput.checkOnValueInput()
