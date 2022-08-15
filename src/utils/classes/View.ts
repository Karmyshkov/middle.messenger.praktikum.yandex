export abstract class View {
  protected _isActiveChatSelector!: string;
  protected _hiddenChatSelecor!: string;
  protected _contentDialodSelector!: string;
  protected _contentDialod!: Nullable<HTMLElement>;
  // Chat
  protected _element!: Element;
  protected _messagesSelector!: string;
  protected _contentDefaultSelector!: string;
  protected _searchInputByChatsSelector!: string;
  protected _imgFromSearchInputByChatsSelector!: string;
  protected _messages!: NodeList;
  protected _contentDefault!: Nullable<HTMLElement>;
  protected _searchInputByChats!: Nullable<HTMLInputElement>;
  protected _imgFromSearchInputByChats!: Nullable<HTMLElement>;
  // Input
  protected _labelTextSelector!: string;
  protected _isValuelabelTextSelector!: string;
  protected _inputElement!: EventTarget;
  //Popup
  protected _menuSelector!: string;
  protected _btnMenuSelector!: string;
  protected _popupAddUserSelector!: string;
  protected _popupDeleteUserSelector!: string;
  protected _popupChangeAvatarSelector!: string;
  protected _popupAddChatSelector!: string;
  protected _isOpenPopupSelector!: string;
  protected _isActiveBurgerMenuSelector!: string;
  protected _popoverSelector!: string;
  protected _btnAttachSelector!: string;
  protected _isShowPopoverSelector!: string;
  protected _menuItemSelector!: string;
  protected _popupСontainerSelector!: string;
  protected _editAvatarSelector!: string;
  protected editAvatarTextSelector!: string;
  protected _menuListElementUserSelector!: string;
  protected _menuClassSelector!: string;
  protected _menuSe_editAvatarSelectorlector!: string;
  protected _isShowMenuSelecor!: string;
  protected _menuBtnSelector!: string;
  protected _editAvatar!: Nullable<HTMLElement>;
  protected _editAvatarText!: Nullable<HTMLElement>;
  protected _btnMenu!: Nullable<HTMLElement>;
  protected _menu!: Nullable<HTMLElement>;
  protected _popupAddUser!: Nullable<HTMLElement>;
  protected _popupDeleteUser!: Nullable<HTMLElement>;
  protected _popover!: Nullable<HTMLElement>;
  protected _btnAttach!: Nullable<HTMLElement>;
  protected _menuItems!: NodeList;
  protected _editAvatarTextSelector!: string;
  protected _addChatBtnSelector!: string;
  //FormValidator
  protected _formSelector!: string;
  protected _btnSelector!: string;
  protected _inputSelector!: string;
  protected _inputHelperTextSelector!: string;
  protected _btnSubmitFormSelector!: string;
  protected _isShowHelperTextSelector!: string;
  protected _isDisableBtnSubmitSelector!: string;
  protected _form!: Nullable<HTMLFormElement>;
  protected _btnSubmit!: Nullable<HTMLElement>;
  protected _errorContainer: Element | null | undefined;
  public _isValidFieldWithCustomRules!: Record<string, boolean> | null;
}
