class Popup {
  constructor(menuSelector, btnSelector, isOpenPopupSelector, config) {
    this._menuSelector = menuSelector
    this._btnMenuSelector = btnSelector
    this._popupAddUserSelector = config.popupAddUserSelector
    this._popupDeleteUserSelector = config.popupDeleteUserSelector
    this._isActiveChatSelector = chatConfig.isActiveChatSelector
    this._hiddenChatSelecor = config.hiddenChatSelecor
    this._isOpenPopupSelector = isOpenPopupSelector
    this._isActiveBurgerMenuSelector = config.isActiveBurgerMenuSelector
    this._popoverSelector = config.popoverSelector
    this._btnAttachSelector = config.btnAttachSelector
    this._isShowPopoverSelector = config.isShowPopoverSelector
    this._contentDialodSelector = config.contentDialodSelector
    this._menuItemSelector = config.menuItemSelector
    this._popupСontainerSelector = config.popupСontainerSelector
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`)
    this._btnMenu = document.querySelector(`.${this._btnMenuSelector}`)
    this._menu = document.querySelector(`.${this._menuSelector}`)
    this._popupAddUser = document.querySelector(`.${this._popupAddUserSelector}`)
    this._popupDeleteUser = document.querySelector(`.${this._popupDeleteUserSelector}`)
    this._popover = document.querySelector(`.${this._popoverSelector}`)
    this._btnAttach = document.querySelector(`.${this._btnAttachSelector}`)
    this._menuItems = this._menu.querySelectorAll(`.${this._menuItemSelector}`)
    this._popupСontainers = this._menu.querySelectorAll(
      `.${this._popupСontainerSelector}`
    )
  }

  _disabledScroll(element) {
    element.style.overflowY = "hidden"
  }

  _enabledScroll(element) {
    element.style.overflowY = "auto"
  }

  _addClassForUserMenu() {
    this._btnMenu.classList.add(this._isActiveBurgerMenuSelector)
  }

  _removeClassForUserMenu() {
    this._btnMenu.classList.remove(this._isActiveBurgerMenuSelector)
  }

  _handleOpenPopup = () => {
    document.addEventListener("click", this._closePopupByOutsideZone)
    this._disabledScroll(this._contentDialod)
    this._menu.classList.add(this._isOpenPopupSelector)
    this._menuSelector === "menu__list_element_user" && this._addClassForUserMenu()
  }

  _handleClosePopup() {
    document.removeEventListener("click", this._closePopupByOutsideZone)
    this._enabledScroll(this._contentDialod)
    this._menu.classList.remove(this._isOpenPopupSelector)
    this._menuSelector === "menu__list_element_user" && this._removeClassForUserMenu()
  }

  _closePopupByOutsideZone = (evt) => {
    if (Array.from(this._menu.classList).includes("menu")) {
      !(
        evt.composedPath().includes(this._menu) ||
        evt.composedPath().includes(this._btnMenu)
      ) && this._handleClosePopup()
    } else {
      this._popupСontainers.forEach((popupContainer) => {
        !evt.composedPath().includes(popupContainer) &&
          !Array.from(evt.target.classList).includes("menu__btn") &&
          this._handleClosePopup()
      })
    }
  }

  addEventListeners() {
    this._btnMenu.addEventListener("click", this._handleOpenPopup)

    this._menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", () =>
        document.querySelector(".menu").classList.remove("menu_is-show")
      )
    )
  }
}

const menuUser = new Popup(
  "menu__list_element_user",
  "burger-menu",
  "menu_is-show",
  chatConfig
)
menuUser.addEventListeners()

const fileMenu = new Popup(
  "menu__list_element_file",
  "chat-footer__btn-attach",
  "menu_is-show",
  chatConfig
)
fileMenu.addEventListeners()

const addUser = new Popup(
  "popup_add-user",
  "menu__btn_add-user",
  "popup_opened",
  chatConfig
)
addUser.addEventListeners()

const deleteUser = new Popup(
  "popup_delete-user",
  "menu__btn_delete-user",
  "popup_opened",
  chatConfig
)
deleteUser.addEventListeners()
