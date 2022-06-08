const messages = document.querySelectorAll(".list-item")
const contentDefault = document.querySelector(".chat__column-default")
const contentDialod = document.querySelector(".chat__column-dialog")
const btnMenu = document.querySelector(".burger-menu")
const menu = document.querySelector(".menu")
const addUserBtn = menu.querySelector(".menu__btn_add-user")
const deleteUserBtn = menu.querySelector(".menu__btn_delete-user")
const popupAddUser = document.querySelector(".popup_add-user")
const popupDeleteUser = document.querySelector(".popup_delete-user")

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
  if (!(evt.composedPath().includes(menu) || evt.composedPath().includes(btnMenu))) {
    handleCloseMenu()
  }
}

btnMenu.addEventListener("click", handleOpenMenu)

function handleOpenPopup(selector) {
  const popup = document.querySelector(selector)
  popup.classList.add("popup_opened")
  handleCloseMenu()
}

function handleClosePopup(popup) {
  popup.classList.remove("popup_opened")
}

function closePopupByOutsideZone(evt, popup) {
  if (evt.target.classList.contains("popup_opened")) {
    handleClosePopup(popup)
  }
}

addUserBtn.addEventListener("click", () => handleOpenPopup(".popup_add-user"))
deleteUserBtn.addEventListener("click", () => handleOpenPopup(".popup_delete-user"))

popupAddUser.addEventListener("click", (evt) =>
  closePopupByOutsideZone(evt, popupAddUser)
)
popupDeleteUser.addEventListener("click", (evt) =>
  closePopupByOutsideZone(evt, popupDeleteUser)
)
