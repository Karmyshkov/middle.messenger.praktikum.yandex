import { BaseAPI } from './BaseAPI';
import {
  CreateChatType,
  RemoveChatType,
  SearchUserByLoginType,
  AddUserToChat,
  GetChatToken,
} from 'types';

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

  public addUserToChat({ users, chatId }: AddUserToChat) {
    return this.put('chats/users', { users, chatId });
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return this.post('user/search', login);
  }
  public getChatToken({ chatId }: GetChatToken) {
    return this.post(`chats/token/${chatId}`, {});
  }
}

export default new ChatApi();
