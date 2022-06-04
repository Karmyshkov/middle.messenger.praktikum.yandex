function enableValidation() {
  const forms = [...document.forms]
  forms.forEach(addEventListenerToForm)
}

function addEventListenerToForm(form) {
  const inputs = Array.from(document.querySelectorAll(".input__text-field"))

  inputs.forEach(addEventListenerToInput)

  form.addEventListener("submit", (evt) => evt.preventDefault())
}

function addEventListenerToInput(input) {
  input.addEventListener("input", handleFieldValidation)
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

enableValidation()
