import { BaseAPI } from './BaseAPI';
import { CreateChatType, RemoveChatType, SearchUserByLoginType } from 'types';

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

  public removeChatById({ chatId }: RemoveChatType) {
    return this.delete('', { chatId });
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return this.post('', { login });
  }
}

export default new ChatApi();
