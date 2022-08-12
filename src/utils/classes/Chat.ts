import { View } from './View';

export class Chat extends View {
  constructor(config: Record<string, string>) {
    super();
    this._messagesSelector = config.messagesSelector;
    this._contentDefaultSelector = config.contentDefaultSelector;
    this._contentDialodSelector = config.contentDialodSelector;
    this._isActiveChatSelector = config.isActiveChatSelector;
    this._hiddenChatSelecor = config.hiddenChatSelecor;
    this._searchInputByChatsSelector = config.searchInputByChatsSelector;
    this._imgFromSearchInputByChatsSelector = config.imgFromSearchInputByChatsSelector;
    this._messages = document.querySelectorAll(`.${this._messagesSelector}`);
    this._contentDefault = document.querySelector(`.${this._contentDefaultSelector}`);
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`);
    this._searchInputByChats = document.querySelector(
      `.${this._searchInputByChatsSelector}`
    );
    this._imgFromSearchInputByChats = document.querySelector(
      `.${this._imgFromSearchInputByChatsSelector}`
    );
  }

  private _removeActiveClassName = () => {
    document
      .querySelector(`.${this._isActiveChatSelector}`)
      ?.classList.remove(this._isActiveChatSelector);
  };

  private _hiddenImg = () => {
    if (this._imgFromSearchInputByChats) {
      this._imgFromSearchInputByChats.style.display = 'none';
    }
  };

  private _showImg = () => {
    if (this._imgFromSearchInputByChats) {
      this._imgFromSearchInputByChats.style.display = 'block';
    }
  };

  public addActiveClassName(evt: Event) {
    this._removeActiveClassName();

    this._element = evt.currentTarget as Element;
    this._element?.classList.add(this._isActiveChatSelector);
    if (this._contentDefault && this._contentDialod) {
      this._contentDefault.classList.add(this._hiddenChatSelecor);
      this._contentDialod.classList.remove(this._hiddenChatSelecor);
    }
  }

  public toggleStateImg = () => {
    if (this._searchInputByChats) {
      this._searchInputByChats.value.length > 0 ? this._hiddenImg() : this._showImg();
    }
  };
}
