class Chat {
  constructor(config) {
    this._messagesSelector = config.messagesSelector
    this._contentDefaultSelector = config.contentDefaultSelector
    this._contentDialodSelector = config.contentDialodSelector
    this._btnMenuSelector = config.btnMenuSelector
    this._menuSelector = config.menuSelector
    this._addUserBtnSelector = config.addUserBtnSelector
    this._deleteUserBtnSelector = config.deleteUserBtnSelector
    this._popupAddUserSelector = config.popupAddUserSelector
    this._popupDeleteUserSelector = config.popupDeleteUserSelector
    this._isActiveChatSelector = chatConfig.isActiveChatSelector
    this._hiddenChatSelecor = config.hiddenChatSelecor
    this._isActiveBurgerMenuSelector = config.isActiveBurgerMenuSelector
    this._isShowMenuSelector = config.isShowMenuSelector
    this._isOpenPopupSelector = config.isOpenPopupSelecot
    this._popoverSelector = config.popoverSelector
    this._btnAttachSelector = config.btnAttachSelector
    this._isShowPopoverSelector = config.isShowPopoverSelector
    this._messages = document.querySelectorAll(`.${this._messagesSelector}`)
    this._btnMenu = document.querySelector(`.${this._btnMenuSelector}`)
    this._menu = document.querySelector(`.${this._menuSelector}`)
    this._addUserBtn = this._menu.querySelector(`.${this._addUserBtnSelector}`)
    this._deleteUserBtn = this._menu.querySelector(`.${this._deleteUserBtnSelector}`)
    this._popupAddUser = document.querySelector(`.${this._popupAddUserSelector}`)
    this._popupDeleteUser = document.querySelector(`.${this._popupDeleteUserSelector}`)
    this._contentDefault = document.querySelector(`.${this._contentDefaultSelector}`)
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`)
    this._popover = document.querySelector(`.${this._popoverSelector}`)
    this._btnAttach = document.querySelector(`.${this._btnAttachSelector}`)
  }

  _addActiveClassName(message) {
    this._messages.forEach(this._removeActiveClassName)
    message.classList.add(this._isActiveChatSelector)
    this._contentDefault.classList.add(this._hiddenChatSelecor)
    this._contentDialod.classList.remove(this._hiddenChatSelecor)
  }

  _removeActiveClassName = (message) => {
    message.classList.remove(this._isActiveChatSelector)
  }

  _disabledScroll(element) {
    element.style.overflowY = "hidden"
  }

  _enabledScroll(element) {
    element.style.overflowY = "auto"
  }

  _handleOpenMenu = () => {
    document.addEventListener("click", this._closeMenuByOutsideZone)
    this._disabledScroll(this._contentDialod)
    this._btnMenu.classList.add(this._isActiveBurgerMenuSelector)
    this._menu.classList.add(this._isShowMenuSelector)
  }

  _handleCloseMenu() {
    document.removeEventListener("click", this._closeMenuByOutsideZone)
    this._enabledScroll(this._contentDialod)
    this._btnMenu.classList.remove(this._isActiveBurgerMenuSelector)
    this._menu.classList.remove(this._isShowMenuSelector)
  }

  _closeMenuByOutsideZone = (evt) => {
    if (
      !(
        evt.composedPath().includes(this._menu) ||
        evt.composedPath().includes(this._btnMenu)
      )
    ) {
      this._handleCloseMenu()
    }
  }

  _handleOpenPopup(popup) {
    popup.classList.add(this._isOpenPopupSelector)
    this._handleCloseMenu()
  }

  _handleClosePopup(popup) {
    popup.classList.remove(this._isOpenPopupSelector)
  }

  _handleOpenPopover = () => {
    this._popover.classList.add(this._isShowPopoverSelector)
    this._disabledScroll(this._contentDialod)
    document.addEventListener("click", this._closePopupByOutsideZone)
  }

  _handleClosePopover() {
    this._popover.classList.remove(this._isShowPopoverSelector)
    this._enabledScroll(this._contentDialod)
  }

  _closePopupByOutsideZone = (evt) => {
    if (
      !(
        evt.composedPath().includes(this._popover) ||
        evt.composedPath().includes(this._btnAttach)
      )
    ) {
      this._handleClosePopover()
    }
  }

  addEventListeners() {
    this._messages.forEach((message) =>
      message.addEventListener("click", () => this._addActiveClassName(message))
    )

    this._btnMenu.addEventListener("click", this._handleOpenMenu)
    this._addUserBtn.addEventListener("click", () =>
      this._handleOpenPopup(this._popupAddUser)
    )
    this._deleteUserBtn.addEventListener("click", () =>
      this._handleOpenPopup(this._popupDeleteUser)
    )
    this._popupAddUser.addEventListener("click", (evt) =>
      this._closePopupByOutsideZone(evt, this._popupAddUser)
    )
    this._popupDeleteUser.addEventListener("click", (evt) =>
      this._closePopupByOutsideZone(evt, this._popupDeleteUser)
    )
    this._btnAttach.addEventListener("click", this._handleOpenPopover)
  }
}

const chat = new Chat(chatConfig)
chat.addEventListeners()
