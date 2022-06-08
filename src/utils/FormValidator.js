class FormValidator {
  constructor(config) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._inputHelperTextSelector = config.inputHelperTextSelector
    this._btnSubmitFormSelector = config.btnSubmitFormSelector
    this._isShowHelperTextSelector = config.isShowHelperTextSelector
    this._isDisableBtnSubmit = config.isDisableBtnSubmit
    this._form = document.querySelector(`.${this._formSelector}`)
    this._inputs = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`))
    this._btnSubmit = document.querySelector(`.${this._btnSubmitFormSelector}`)
  }

  enableValidation() {
    this.addEventListenerToForm()
  }

  addEventListenerToForm() {
    this.toggleBtnState(false)
    this._inputs.forEach((input) => this.addEventListenerToInput(input))
    this._form.addEventListener("submit", (evt) => evt.preventDefault())
  }

  addEventListenerToInput(input) {
    input.addEventListener("input", (evt) => {
      this.handleFieldValidation(evt)
      this.toggleBtnState(this.checkStateForm())
    })
  }

  handleFieldValidation(evt) {
    const element = evt.target
    const errorContainer = element.parentElement.parentElement.querySelector(
      `.${this._inputHelperTextSelector}`
    )
    !element.validity.valid
      ? this.showErrorMessage(errorContainer, element.validationMessage)
      : this.closeErrorMessage(errorContainer)
  }

  closeErrorMessage(errorContainer) {
    errorContainer.textContent = ""
    errorContainer.classList.remove(this._isShowHelperTextSelector)
  }

  showErrorMessage(errorContainer, validationMessage) {
    errorContainer.textContent = validationMessage
    errorContainer.classList.add(this._isShowHelperTextSelector)
  }

  checkStateForm() {
    return this._form.checkValidity()
  }

  toggleBtnState(isStateForm) {
    isStateForm
      ? this._btnSubmit.classList.remove(this._isDisableBtnSubmit)
      : this._btnSubmit.classList.add(this._isDisableBtnSubmit)
  }
}

const formValidator = new FormValidator(config)
formValidator.enableValidation()
