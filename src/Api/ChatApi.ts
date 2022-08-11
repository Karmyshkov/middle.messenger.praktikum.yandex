import { BaseAPI } from './BaseAPI';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
} from 'types';

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

  public addUserToChat({ users, chatId }: AddUserToChatType) {
    return this.put('/users', { users, chatId });
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return this.post(`/token/${chatId}`, {});
  }
}

export default new ChatApi();
