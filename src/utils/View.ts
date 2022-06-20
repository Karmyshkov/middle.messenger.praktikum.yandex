export abstract class View {
  protected _messagesSelector!: string;
  protected _contentDefaultSelector!: string;
  protected _contentDialodSelector!: string;
  protected _isActiveChatSelector!: string;
  protected _hiddenChatSelecor!: string;
  protected _searchInputByChatsSelector!: string;
  protected _imgFromSearchInputByChatsSelector!: string;
  protected _messages!: NodeList;
  protected _contentDefault!: Nullable<HTMLElement>;
  protected _contentDialod!: Nullable<HTMLElement>;
  protected _searchInputByChats!: Nullable<HTMLInputElement>;
  protected _imgFromSearchInputByChats!: Nullable<HTMLElement>;
}
