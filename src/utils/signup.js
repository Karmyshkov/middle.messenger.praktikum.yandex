const signupFormValidator = new FormValidator(inputValidateConfig, "signup")
signupFormValidator.enableValidation()

const signupInput = new Input(inputValidateConfig, "signup")
signupInput.checkOnValueInput()

const inputs = document.querySelectorAll(inputValidateConfig.inputPasswordSelector)
const inputRepeatPassword = inputs[1].parentElement.parentElement.querySelector(
  `.${inputValidateConfig.inputHelperTextSelector}`
)
const submitBtn = document.querySelector(`.${inputValidateConfig.btnSubmitFormSelector}`)

function isMatchedPassword() {
  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      if (inputs[0].validity.valid && inputs[1].validity.valid) {
        removeClassNameToInput(inputs)
        addedMessageToMatchedPassword()
      } else {
        addClassNameToInput()
      }
      disabledBtn()
    })
  )
}

function addClassNameToInput() {
  inputs[0].classList.add(inputValidateConfig.inputErrorSelector)
  inputs[1].classList.add(inputValidateConfig.inputErrorSelector)
}

function removeClassNameToInput() {
  inputs[0].classList.remove(inputValidateConfig.inputErrorSelector)
  inputs[1].classList.remove(inputValidateConfig.inputErrorSelector)
}

function addedMessageToMatchedPassword() {
  if (inputs[0].value !== inputs[1].value) {
    inputRepeatPassword.textContent = "Пароли не совпадают"
    inputRepeatPassword.classList.add(inputValidateConfig.isShowHelperTextSelector)
    addClassNameToInput()
  } else {
    inputRepeatPassword.textContent = ""
    inputRepeatPassword.classList.remove(inputValidateConfig.isShowHelperTextSelector)
    removeClassNameToInput()
  }
}

function disabledBtn() {
  if (document.forms[0].checkValidity()) {
    if (inputs[0].value === inputs[1].value) {
      submitBtn.classList.remove(inputValidateConfig.isDisableBtnSubmitSelector)
    } else {
      submitBtn.classList.add(inputValidateConfig.isDisableBtnSubmitSelector)
    }
  }
}

isMatchedPassword()
