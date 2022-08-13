import { BaseAPI } from './BaseAPI';
import {
  CreateChatType,
  RemoveChatType,
  AddUserToChatType,
  GetChatTokenType,
  GetUserForChatType,
  RemoveUserFromChat,
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
    return this.put('users', { users, chatId });
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return this.post(`token/${chatId}`, {});
  }

  public getUserForChat({ chatId }: GetUserForChatType) {
    return this.get(`${chatId}/users`);
  }

  public removeUserFromChat({ users, chatId }: RemoveUserFromChat) {
    return this.delete('users', { users, chatId });
  }
}

export default new ChatApi();
