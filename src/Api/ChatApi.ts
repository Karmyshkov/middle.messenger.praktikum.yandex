import { BaseAPI } from './BaseAPI';
import { CreateChatType } from 'types';

class ChatApi extends BaseAPI {
  constructor() {
    super({ path: '/chats' });
  }

  public createChat({ title }: CreateChatType) {
    return this.post('', { title });
  }
}

export default new ChatApi();
