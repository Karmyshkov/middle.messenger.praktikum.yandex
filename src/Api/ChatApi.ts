import { BaseAPI } from './BaseAPI';
import { CreateChatType, RemoveChatType, SearchUserByLoginType } from 'types';

class ChatApi extends BaseAPI {
  constructor() {
    super({ path: '' });
  }

  public createChat({ title }: CreateChatType) {
    return this.post('chats', { title });
  }

  public getChats() {
    return this.get('chats');
  }

  public removeChatById({ chatId }: RemoveChatType) {
    return this.delete('chats', { chatId });
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return this.post('user/search', { login });
  }
}

export default new ChatApi();
