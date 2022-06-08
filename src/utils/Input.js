class Input {
  constructor(config) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._labelTextSelector = config.labelTextSelector
    this._isValuelabelTextSelector = config.isValuelabelTextSelector
    this._form = document.querySelector(`.${this._formSelector}`)
    this._inputs = Array.from(this._form.querySelectorAll(`.${this._inputSelector}`))
  }

  checkOnValueInput() {
    this._inputs.forEach((input) => {
      const helperText = input.parentElement.querySelector(`.${this._labelTextSelector}`)
      input.addEventListener("input", () => {
        input.value.length === 0
          ? this._removeClassNameToHelperText(helperText)
          : this._addClassNameToHelperText(helperText)
      })
    })
  }

  _addClassNameToHelperText(helperText) {
    helperText.classList.add(this._isValuelabelTextSelector)
  }

  _removeClassNameToHelperText(helperText) {
    helperText.classList.remove(this._isValuelabelTextSelector)
  }
}

const input = new Input(config)
input.checkOnValueInput()
