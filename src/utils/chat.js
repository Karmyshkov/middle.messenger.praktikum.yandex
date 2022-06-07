const messages = document.querySelectorAll(".list-item")

messages.forEach((message) =>
  message.addEventListener("click", () => addActiveClassName(message))
)

function addActiveClassName(message) {
  messages.forEach(removeActiveClassName)
  message.classList.add("chat_is-active")
}

function removeActiveClassName(message) {
  message.classList.remove("chat_is-active")
}
