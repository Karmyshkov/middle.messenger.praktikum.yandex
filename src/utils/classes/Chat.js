class Chat {
  constructor(config) {
    this._messagesSelector = config.messagesSelector
    this._contentDefaultSelector = config.contentDefaultSelector
    this._contentDialodSelector = config.contentDialodSelector
    this._isActiveChatSelector = chatConfig.isActiveChatSelector
    this._hiddenChatSelecor = config.hiddenChatSelecor
    this._messages = document.querySelectorAll(`.${this._messagesSelector}`)
    this._searchInputByChatsSelector = config.searchInputByChatsSelector
    this._imgFromSearchInputByChatsSelector = config.imgFromSearchInputByChatsSelector
    this._contentDefault = document.querySelector(`.${this._contentDefaultSelector}`)
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`)
    this._searchInputByChats = document.querySelector(
      `.${this._searchInputByChatsSelector}`
    )
    this._imgFromSearchInputByChats = document.querySelector(
      `.${this._imgFromSearchInputByChatsSelector}`
    )
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

  _hiddenImg = () => {
    this._imgFromSearchInputByChats.style.display = "none"
  }

  _showImg = () => {
    this._imgFromSearchInputByChats.style.display = "block"
  }

  _toggleStateImg = () => {
    this._searchInputByChats.value.length > 0 ? this._hiddenImg() : this._showImg()
  }

  addEventListeners() {
    this._messages.forEach((message) => {
      message.addEventListener("click", () => this._addActiveClassName(message))
    })
    this._searchInputByChats.addEventListener("input", this._toggleStateImg)
  }
}
