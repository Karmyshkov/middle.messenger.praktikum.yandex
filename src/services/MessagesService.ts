import { store } from 'core';
import {
  URLS,
  showTooltip,
  MESSAGES,
  ACTIONS_WEBSOCKET,
  TYPES_MESSAGE_WEBSOCKET,
} from 'utils';
import { InitialStateType } from 'types';

class MessagesService {
  private _userId!: string | number;
  private _chatId!: string | number;
  private _token!: string;
  private _wss!: WebSocket | null;
  private _ping!: any;

  constructor() {
    this._wss = null;
    this._handleOpen = this._handleOpen.bind(this);
    this._handleMessage = this._handleMessage.bind(this);
    this._handleError = this._handleError.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  private _setListeners() {
    if (this._wss) {
      this._wss.addEventListener(ACTIONS_WEBSOCKET.OPEN, this._handleOpen);
      this._wss.addEventListener(ACTIONS_WEBSOCKET.CLOSE, this._handleClose);
      this._wss.addEventListener(ACTIONS_WEBSOCKET.MESSAGE, this._handleMessage);
      this._wss.addEventListener(ACTIONS_WEBSOCKET.ERROR, this._handleError);
    }
  }

  private _removeListeners() {
    if (this._wss) {
      this._wss.removeEventListener(ACTIONS_WEBSOCKET.OPEN, this._handleOpen);
      this._wss.removeEventListener(ACTIONS_WEBSOCKET.CLOSE, this._handleClose);
      this._wss.removeEventListener(ACTIONS_WEBSOCKET.MESSAGE, this._handleMessage);
      this._wss.removeEventListener(ACTIONS_WEBSOCKET.ERROR, this._handleError);
    }
  }

  private _handleOpen() {
    if (this._wss) {
      this.getMessages();
      this._ping = setInterval(() => {
        this._wss?.send(JSON.stringify({ type: TYPES_MESSAGE_WEBSOCKET.PING }));
      }, 5000);
    }
  }

  private _handleClose(evt: any) {
    this._removeListeners();
    if (!evt.wasClean) {
      showTooltip({
        text: MESSAGES.CONNECTION_PROBLEMS,
        type: 'error',
      });
    }
  }

  private _handleMessage(evt: any) {
    const messages = JSON.parse(evt.data);

    if (messages.type !== TYPES_MESSAGE_WEBSOCKET.PONG) {
      if (Array.isArray(messages)) {
        store.setState({
          messages: messages.reverse(),
        });
      } else {
        const state = store.getState() as InitialStateType;

        store.setState({
          messages: Object.assign(state.messages, { [state.messages.length]: messages }),
        });
      }
    }
  }

  private _handleError(evt: any) {
    showTooltip({
      text: evt.message,
      type: 'error',
    });
  }

  private _leave() {
    if (this._wss) {
      clearInterval(this._ping);
      this._wss.close();
      this._removeListeners();
    }
  }

  public connect({ userId, chatId, token }: any) {
    if (this._chatId !== chatId) {
      this._leave();
      this._userId = userId;
      this._chatId = chatId;
      this._token = token;
      this._wss = new WebSocket(
        `${URLS.WSS}/${this._userId}/${this._chatId}/${this._token}`
      );
      this._setListeners();
    }
  }

  public getMessages() {
    if (this._wss) {
      this._wss.send(
        JSON.stringify({
          content: '0',
          type: TYPES_MESSAGE_WEBSOCKET.GET_OLD,
        })
      );
    }
  }

  public sendMessage(message: string) {
    if (this._wss) {
      this._wss?.send(
        JSON.stringify({
          content: message,
          type: TYPES_MESSAGE_WEBSOCKET.MESSAGE,
        })
      );
    }
  }
}

export default new MessagesService();
