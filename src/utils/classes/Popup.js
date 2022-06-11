class Popup {
  constructor(menuSelector, btnSelector, isOpenPopupSelector, config) {
    this._menuSelector = menuSelector
    this._btnMenuSelector = btnSelector
    this._popupAddUserSelector = config.popupAddUserSelector
    this._popupDeleteUserSelector = config.popupDeleteUserSelector
    this._popupChangeAvatarSelector = config.popupChangeAvatarSelector
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
    this._editAvatarSelector = config.editAvatarSelector
    this.editAvatarTextSelector = config.editAvatarTextSelector
    this._menuListElementUserSelector = config.menuListElementUserSelector
    this._menuClassSelector = config.menuClassSelector
    this._isShowMenuSelecor = config.isShowMenuSelecor
    this._menuBtnSelector = config.menuBtnSelector
    this._editAvatar = document.querySelector(`.${this._editAvatarSelector}`)
    this._editAvatarText = document.querySelector(`.${this.editAvatarTextSelector}`)
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`)
    this._btnMenu = document.querySelector(`.${this._btnMenuSelector}`)
    this._menu = document.querySelector(`.${this._menuSelector}`)
    this._popupAddUser = document.querySelector(`.${this._popupAddUserSelector}`)
    this._popupDeleteUser = document.querySelector(`.${this._popupDeleteUserSelector}`)
    this._popover = document.querySelector(`.${this._popoverSelector}`)
    this._btnAttach = document.querySelector(`.${this._btnAttachSelector}`)
    this._menuItems = document.querySelectorAll(`.${this._menuItemSelector}`)
  }

  _disabledScroll(element) {
    if (element) {
      element.style.overflowY = "hidden"
    }
  }

  _enabledScroll(element) {
    if (element) {
      element.style.overflowY = "auto"
    }
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
    this._menuSelector === this._menuListElementUserSelector &&
      this._addClassForUserMenu()
  }

  _handleClosePopup() {
    document.removeEventListener("click", this._closePopupByOutsideZone)
    this._enabledScroll(this._contentDialod)
    this._menu.classList.remove(this._isOpenPopupSelector)
    this._menuSelector === this._menuListElementUserSelector &&
      this._removeClassForUserMenu()
  }

  _closePopupByOutsideZone = (evt) => {
    const classes = Array.from(this._menu.classList)

    if (classes.includes(this._menuClassSelector)) {
      !(
        evt.composedPath().includes(this._menu) ||
        evt.composedPath().includes(this._btnMenu)
      ) && this._handleClosePopup()
    }

    if (
      classes.includes(this._popupAddUserSelector) ||
      classes.includes(this._popupDeleteUserSelector)
    ) {
      const popupContainer = this._menu.querySelector(`.${this._popupСontainerSelector}`)
      !evt.composedPath().includes(popupContainer) &&
        !Array.from(evt.target.classList).includes(this._menuBtnSelector) &&
        this._handleClosePopup()
    }

    if (classes.includes(this._popupChangeAvatarSelector)) {
      !evt.composedPath().includes(this._popupСontainers[0]) &&
        evt.target !== this._editAvatarText &&
        evt.target !== this._editAvatar &&
        this._handleClosePopup()
    }
  }

  addEventListeners() {
    this._btnMenu.addEventListener("click", this._handleOpenPopup)
    this._menuItems.forEach((menuItem) =>
      menuItem.addEventListener("click", () =>
        document
          .querySelector(`.${this._menuClassSelector}`)
          .classList.remove(this._isShowMenuSelecor)
      )
    )
  }
}
