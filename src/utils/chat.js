const messages = document.querySelectorAll(".list-item")
const contentDefault = document.querySelector(".chat__column-default")
const contentDialod = document.querySelector(".chat__column-dialog")
const btnMenu = document.querySelector(".burger-menu")
const menu = document.querySelector(".menu")

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

function handleOpenMenu() {
  document.addEventListener("click", closePopupByOutsideZone)
  this.classList.add("burger-menu_active")
  menu.classList.add("menu_is-show")
}

function handleCloseMenu() {
  document.removeEventListener("click", closePopupByOutsideZone)
  btnMenu.classList.remove("burger-menu_active")
  menu.classList.remove("menu_is-show")
}

function closePopupByOutsideZone(evt) {
  if (!evt.target.classList.contains("menu_is-show") && evt.target !== btnMenu) {
    handleCloseMenu()
  }
}

btnMenu.addEventListener("click", handleOpenMenu)
