import { BaseAPI } from './BaseAPI';
import { CreateChatType, RemoveChatType, AddUserToChat, GetChatToken } from 'types';

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

  public addUserToChat({ users, chatId }: AddUserToChat) {
    return this.put('/users', { users, chatId });
  }

  public getChatToken({ chatId }: GetChatToken) {
    return this.post(`/token/${chatId}`, {});
  }
}

export default new ChatApi();
