import { BASE_URL_WSS, showTooltip, CONNECTION_PROBLEMS } from 'utils';

class MessagesService {
  private _userId!: string | number;
  private _chatId!: string | number;
  private _token!: string;
  private _wss!: WebSocket;
  private _ping!: any;

  constructor() {
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

  private _handleOpen() {
    this.getMessages(0);
    this._ping = setInterval(() => {
      this._wss.send(JSON.stringify({ type: 'ping' }));
    }, 5000);
  }

  private _handleClose(evt: any) {
    this._removeListeners();
    if (!evt.wasClean) {
      showTooltip({
        text: CONNECTION_PROBLEMS,
        type: 'error',
      });
    }
    if (evt.code === 1006) {
      this._reconnection();
    }
  }

  private _handleMessage(evt: any) {
    const data = JSON.parse(evt.data);
    console.log(data);
    //console.log(data);
  }

  private _handleError(evt: any) {
    showTooltip({
      text: evt.message,
      type: 'error',
    });
  }

  private _reconnection() {
    this.connect({
      userId: this._userId,
      chatId: this._chatId,
      token: this._token,
    });
  }

  public connect({ userId, chatId, token }: any) {
    this._userId = userId;
    this._chatId = chatId;
    this._token = token;
    this._wss = new WebSocket(
      `${BASE_URL_WSS}/${this._userId}/${this._chatId}/${this._token}`
    );
    this._setListeners();
  }

  public getMessages(offset: number) {
    this._wss.send(
      JSON.stringify({
        content: offset.toString(),
        type: 'get old',
      })
    );
  }

  public leave() {
    clearInterval(this._ping);
    this._wss.close();
    this._removeListeners();
  }

  public sendMessage(message: string) {
    this._wss.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }
}

export default new MessagesService();
