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

  public createChat({ ...rest }: CreateChatType) {
    return this.post('', { ...rest });
  }

  public getChats() {
    return this.get('');
  }

  public removeChatById({ ...rest }: RemoveChatType) {
    return this.delete('', { ...rest });
  }

  public addUserToChat({ ...rest }: AddUserToChatType) {
    return this.put('users', { ...rest });
  }

  public getChatToken({ chatId }: GetChatTokenType) {
    return this.post(`token/${chatId}`, {});
  }

  public getUserForChat({ chatId }: GetUserForChatType) {
    return this.get(`${chatId}/users`);
  }

  public removeUserFromChat({ ...rest }: RemoveUserFromChat) {
    return this.delete('users', { ...rest });
  }
}

export default new ChatApi();
