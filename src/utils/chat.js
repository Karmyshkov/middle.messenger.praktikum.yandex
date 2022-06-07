const messages = document.querySelectorAll(".list-item")
const contentDefault = document.querySelector(".chat__column-default")
const contentDialod = document.querySelector(".chat__column-dialog")
const btnMenu = document.querySelector(".burger-menu")
const menu = document.querySelector(".menu")
const addUserBtn = menu.querySelector(".menu__btn_add-user")
const deleteUserBtn = menu.querySelector(".menu__btn_delete-user")

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
  document.addEventListener("click", closeMenuByOutsideZone)
  this.classList.add("burger-menu_active")
  menu.classList.add("menu_is-show")
}

function handleCloseMenu() {
  document.removeEventListener("click", closeMenuByOutsideZone)
  btnMenu.classList.remove("burger-menu_active")
  menu.classList.remove("menu_is-show")
}

function closeMenuByOutsideZone(evt) {
  if (!evt.target.classList.contains("menu_is-show") && evt.target !== btnMenu) {
    handleCloseMenu()
  }
}

btnMenu.addEventListener("click", handleOpenMenu)

function handleOpenPopup(selector) {
  const popup = document.querySelector(selector)
  document.addEventListener("click", closePopupByOutsideZone)
  popup.classList.add("popup_opened")
}

function handleClosePopup() {
  document.removeEventListener("click", closePopupByOutsideZone)
  const popup = document.querySelector(".popup_opened")
  popup.classList.remove("popup_opened")
}

function closePopupByOutsideZone(evt) {
  if (
    !evt.target.classList.contains("popup__container") &&
    evt.target !== addUserBtn &&
    evt.target !== deleteUserBtn
  ) {
    handleClosePopup()
  }
}

addUserBtn.addEventListener("click", () => handleOpenPopup(".popup_add-user"))
deleteUserBtn.addEventListener("click", () => handleOpenPopup(".popup_delete-user"))
