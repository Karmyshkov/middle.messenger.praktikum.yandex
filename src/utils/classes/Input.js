class Input {
  constructor(config, formSelector) {
    this._formSelector = formSelector
    this._inputSelector = config.inputSelector
    this._labelTextSelector = config.labelTextSelector
    this._isValuelabelTextSelector = config.isValuelabelTextSelector
    this._forms = document.querySelectorAll(`.${this._formSelector}`)
  }

  _addClassNameToHelperText(helperText) {
    helperText.classList.add(this._isValuelabelTextSelector)
  }

  _removeClassNameToHelperText(helperText) {
    helperText.classList.remove(this._isValuelabelTextSelector)
  }

  checkOnValueInput() {
    this._forms.forEach((form) => {
      const inputs = Array.from(form.querySelectorAll(`.${this._inputSelector}`))

      inputs.forEach((input) => {
        const helperText = input.parentElement.querySelector(
          `.${this._labelTextSelector}`
        )
        input.addEventListener("input", () => {
          input.value.length === 0
            ? this._removeClassNameToHelperText(helperText)
            : this._addClassNameToHelperText(helperText)
        })
      })
    })
  }
}
