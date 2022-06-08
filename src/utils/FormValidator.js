class FormValidator {
  constructor(config) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._inputHelperTextSelector = config.inputHelperTextSelector
    this._btnSubmitFormSelector = config.btnSubmitFormSelector
    this._isShowHelperTextSelector = config.isShowHelperTextSelector
    this._isDisableBtnSubmitSelector = config.isDisableBtnSubmitSelector
    this._form = document.querySelector(`.${this._formSelector}`)
    this._inputs = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`))
    this._btnSubmit = document.querySelector(`.${this._btnSubmitFormSelector}`)
  }

  enableValidation() {
    this._addEventListenerToForm()
  }

  _addEventListenerToForm() {
    this._toggleBtnState(false)
    this._inputs.forEach((input) => this._addEventListenerToInput(input))
    this._form.addEventListener("submit", (evt) => evt.preventDefault())
  }

  _addEventListenerToInput(input) {
    input.addEventListener("input", (evt) => {
      this._handleFieldValidation(evt)
      this._toggleBtnState(this._checkStateForm())
    })
  }

  _handleFieldValidation(evt) {
    const element = evt.target
    const errorContainer = element.parentElement.parentElement.querySelector(
      `.${this._inputHelperTextSelector}`
    )
    !element.validity.valid
      ? this._showErrorMessage(errorContainer, element.validationMessage)
      : this._closeErrorMessage(errorContainer)
  }

  _closeErrorMessage(errorContainer) {
    errorContainer.textContent = ""
    errorContainer.classList.remove(this._isShowHelperTextSelector)
  }

  _showErrorMessage(errorContainer, validationMessage) {
    errorContainer.textContent = validationMessage
    errorContainer.classList.add(this._isShowHelperTextSelector)
  }

  _checkStateForm() {
    return this._form.checkValidity()
  }

  _toggleBtnState(isStateForm) {
    isStateForm
      ? this._btnSubmit.classList.remove(this._isDisableBtnSubmitSelector)
      : this._btnSubmit.classList.add(this._isDisableBtnSubmitSelector)
  }
}

const formValidator = new FormValidator(config)
formValidator.enableValidation()
