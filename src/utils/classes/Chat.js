class Chat {
  constructor(config) {
    this._messagesSelector = config.messagesSelector
    this._contentDefaultSelector = config.contentDefaultSelector
    this._contentDialodSelector = config.contentDialodSelector
    this._isActiveChatSelector = chatConfig.isActiveChatSelector
    this._hiddenChatSelecor = config.hiddenChatSelecor
    this._messages = document.querySelectorAll(`.${this._messagesSelector}`)
    this._contentDefault = document.querySelector(`.${this._contentDefaultSelector}`)
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`)
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

  addEventListeners() {
    this._messages.forEach((message) =>
      message.addEventListener("click", () => this._addActiveClassName(message))
    )
  }
}
