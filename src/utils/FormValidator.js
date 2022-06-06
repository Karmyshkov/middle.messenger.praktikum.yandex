function enableValidation() {
  const forms = [...document.forms]
  forms.forEach(addEventListenerToForm)
}

function addEventListenerToForm(form) {
  toggleBtnState(false)
  const inputs = Array.from(form.querySelectorAll(".input__text-field"))

  inputs.forEach((input) => addEventListenerToInput(input, form))

  form.addEventListener("submit", (evt) => evt.preventDefault())
}

function addEventListenerToInput(input, form) {
  input.addEventListener("input", (evt) => {
    handleFieldValidation(evt)
    toggleBtnState(checkStateForm(form), form)
  })
}

function handleFieldValidation(evt) {
  const element = evt.target
  const errorContainer =
    element.parentElement.parentElement.querySelector(".input__helper-text")
  !element.validity.valid
    ? showErrorMessage(errorContainer, element.validationMessage)
    : closeErrorMessage(errorContainer)
}

function closeErrorMessage(errorContainer) {
  errorContainer.textContent = ""
  errorContainer.classList.remove("input__helper-text_show")
}

function showErrorMessage(errorContainer, validationMessage) {
  errorContainer.textContent = validationMessage
  errorContainer.classList.add("input__helper-text_show")
}

function checkStateForm(form) {
  return form.checkValidity()
}

function toggleBtnState(isStateForm, form = document.forms[0]) {
  const submitBtn = form.querySelector("button")
  if (isStateForm) {
    submitBtn.classList.remove("button_disable")
  } else {
    submitBtn.classList.add("button_disable")
  }
}

enableValidation()
