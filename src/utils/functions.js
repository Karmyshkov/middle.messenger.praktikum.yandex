function checkOnValueInput() {
  const inputs = Array.from(document.forms[0].querySelectorAll(".input__text-field"))
  inputs.forEach((input) => {
    const helperText = input.parentElement.querySelector(".input__text")
    input.addEventListener("input", () => {
      input.value.length === 0
        ? removeClassNameToHelperText(helperText)
        : addClassNameToHelperText(helperText)
    })
  })
}

function addClassNameToHelperText(helperText) {
  helperText.classList.add("input__text_isValue")
}

function removeClassNameToHelperText(helperText) {
  helperText.classList.remove("input__text_isValue")
}

checkOnValueInput()
