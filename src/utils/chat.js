const messages = document.querySelectorAll(".list-item")
const contentDefault = document.querySelector(".chat__column-default")
const contentDialod = document.querySelector(".chat__column-dialog")

messages.forEach((message) =>
  message.addEventListener("click", () => addActiveClassName(message))
)

function addActiveClassName(message) {
  messages.forEach(removeActiveClassName)
  message.classList.add("chat_is-active")
  contentDefault.classList.add("chat__column_is-hidden")
  contentDialod.classList.remove("chat__column_is-hidden")
}

function removeActiveClassName(message) {
  message.classList.remove("chat_is-active")
}
