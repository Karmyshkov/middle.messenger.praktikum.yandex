import { BaseAPI } from './BaseAPI';
import { CreateChatType } from 'types';

class ChatApi extends BaseAPI {
  constructor() {
    super({ path: '/chats' });
  }

  public createChat({ title }: CreateChatType) {
    return this.post('', { title });
  }

  public getChats() {
    return this.get('');
  }
}

export default new ChatApi();
