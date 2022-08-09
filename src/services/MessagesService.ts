import { store } from 'core';
import { BASE_URL_WSS } from 'utils/constants';

interface MessagesServiceProps {
  userID: number | string;
  chatId: number | string;
  token: string;
}

export class MessagesService {
  private _userID: string | number;
  private _chatId: string | number;
  private _token: string;
  private _wss: WebSocket;

  constructor({ userID, chatId, token }: MessagesServiceProps) {
    this._userID = userID;
    this._chatId = chatId;
    this._token = token;
    this._wss = new WebSocket(
      `${BASE_URL_WSS}/${this._userID}/${this._chatId}/${this._token}`
    );

    this._handleOpen = this._handleOpen.bind(this);
    this._handleMessage = this._handleMessage.bind(this);
    this._handleError = this._handleError.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  private _setListeners() {
    this._wss.addEventListener('open', this._handleOpen);
    this._wss.addEventListener('close', this._handleClose);
    this._wss.addEventListener('message', this._handleMessage);
    this._wss.addEventListener('error', this._handleError);
  }

  private _removeListeners() {
    this._wss.removeEventListener('open', this._handleOpen);
    this._wss.removeEventListener('close', this._handleClose);
    this._wss.removeEventListener('message', this._handleMessage);
    this._wss.removeEventListener('error', this._handleError);
  }

  private _handleOpen() {}

  private _handleClose() {}

  private _handleMessage() {}

  private _handleError() {}
}

const messagesService = new MessagesService({ userID: 1, chatId: 1, token: '1' });
