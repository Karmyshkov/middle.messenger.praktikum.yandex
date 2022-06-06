const inputs = Array.from(document.forms[0].querySelectorAll("input[type='password']"))
const inputRepeatPassword =
  inputs[1].parentElement.parentElement.querySelector(".input__helper-text")

function isMatchedPassword() {
  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      if (inputs[0].validity.valid && inputs[1].validity.valid) {
        removeClassNameToInput(inputs)
        addedMessageToMatchedPassword()
      } else {
        addClassNameToInput()
      }
    })
  )
}

function addClassNameToInput() {
  inputs[0].classList.add("input__text_error")
  inputs[1].classList.add("input__text_error")
}

function removeClassNameToInput() {
  inputs[0].classList.remove("input__text_error")
  inputs[1].classList.remove("input__text_error")
}

function addedMessageToMatchedPassword() {
  if (inputs[0].value !== inputs[1].value) {
    inputRepeatPassword.textContent = "Пароли не совпадают"
    inputRepeatPassword.classList.add("input__helper-text_show")
    addClassNameToInput()
  } else {
    inputRepeatPassword.textContent = ""
    inputRepeatPassword.classList.remove("input__helper-text_show")
    removeClassNameToInput()
  }
}

isMatchedPassword()
