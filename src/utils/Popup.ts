import { View } from './View';

export class Popup extends View {
  constructor(
    menuSelector: string,
    btnSelector: string,
    isOpenPopupSelector: string,
    config: Record<string, string>
  ) {
    super();
    this._menuSelector = menuSelector;
    this._btnMenuSelector = btnSelector;
    this._popupAddUserSelector = config.popupAddUserSelector;
    this._popupDeleteUserSelector = config.popupDeleteUserSelector;
    this._popupChangeAvatarSelector = config.popupChangeAvatarSelector;
    this._isActiveChatSelector = config.isActiveChatSelector;
    this._hiddenChatSelecor = config.hiddenChatSelecor;
    this._isOpenPopupSelector = isOpenPopupSelector;
    this._isActiveBurgerMenuSelector = config.isActiveBurgerMenuSelector;
    this._popoverSelector = config.popoverSelector;
    this._btnAttachSelector = config.btnAttachSelector;
    this._isShowPopoverSelector = config.isShowPopoverSelector;
    this._contentDialodSelector = config.contentDialodSelector;
    this._menuItemSelector = config.menuItemSelector;
    this._popupСontainerSelector = config.popupСontainerSelector;
    this._editAvatarSelector = config.editAvatarSelector;
    this.editAvatarTextSelector = config.editAvatarTextSelector;
    this._menuListElementUserSelector = config.menuListElementUserSelector;
    this._menuClassSelector = config.menuClassSelector;
    this._isShowMenuSelecor = config.isShowMenuSelecor;
    this._menuBtnSelector = config.menuBtnSelector;
    this._editAvatar = document.querySelector(`.${this._editAvatarSelector}`);
    this._editAvatarText = document.querySelector(`.${this.editAvatarTextSelector}`);
    this._contentDialod = document.querySelector(`.${this._contentDialodSelector}`);
    this._btnMenu = document.querySelector(`.${this._btnMenuSelector}`);
    this._menu = document.querySelector(`.${this._menuSelector}`);
    this._popupAddUser = document.querySelector(`.${this._popupAddUserSelector}`);
    this._popupDeleteUser = document.querySelector(`.${this._popupDeleteUserSelector}`);
    this._popover = document.querySelector(`.${this._popoverSelector}`);
    this._btnAttach = document.querySelector(`.${this._btnAttachSelector}`);
    this._menuItems = document.querySelectorAll(`.${this._menuItemSelector}`);
  }

  private _disabledScroll(element: HTMLElement | null) {
    if (element) {
      element.style.overflowY = 'hidden';
    }
  }

  private _enabledScroll(element: HTMLElement | null) {
    if (element) {
      element.style.overflowY = 'auto';
    }
  }

  private _addClassForUserMenu() {
    this._btnMenu && this._btnMenu.classList.add(this._isActiveBurgerMenuSelector);
  }

  private _removeClassForUserMenu() {
    this._btnMenu && this._btnMenu.classList.remove(this._isActiveBurgerMenuSelector);
  }

  public handleOpenPopup = () => {
    if (this._menu) {
      document.addEventListener('click', this._closePopupByOutsideZone);
      this._disabledScroll(this._contentDialod);
      this._menu.classList.add(this._isOpenPopupSelector);
      this._menuSelector === this._menuListElementUserSelector &&
        this._addClassForUserMenu();
    }
  };

  private _handleClosePopup() {
    if (this._menu) {
      document.removeEventListener('click', this._closePopupByOutsideZone);
      this._enabledScroll(this._contentDialod);
      this._menu.classList.remove(this._isOpenPopupSelector);
      this._menuSelector === this._menuListElementUserSelector &&
        this._removeClassForUserMenu();
    }
  }

  private _closePopupByOutsideZone = (evt: Event) => {
    if (this._menu && this._btnMenu) {
      const classes = Array.from(this._menu.classList);
      const popupContainer = this._menu.querySelector(`.${this._popupСontainerSelector}`);
      const element = evt.target as Element;

      if (classes.includes(this._menuClassSelector)) {
        !(
          evt.composedPath().includes(this._menu) ||
          evt.composedPath().includes(this._btnMenu)
        ) && this._handleClosePopup();
      }

      if (
        popupContainer &&
        (classes.includes(this._popupAddUserSelector) ||
          classes.includes(this._popupDeleteUserSelector))
      ) {
        popupContainer &&
          !evt.composedPath().includes(popupContainer) &&
          !Array.from(element.classList).includes(this._menuBtnSelector) &&
          this._handleClosePopup();
      }

      if (popupContainer && classes.includes(this._popupChangeAvatarSelector)) {
        !evt.composedPath().includes(popupContainer) &&
          element !== this._editAvatarText &&
          element !== this._editAvatar &&
          this._handleClosePopup();
      }
    }
  };
}
