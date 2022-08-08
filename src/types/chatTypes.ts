interface CreateChatType {
  title: string;
}

interface RemoveChatType {
  chatId: string;
}

interface SearchUserByLoginType {
  login: string;
  form?: Element | null;
}

interface AddUserToChat {
  users: Record<number, number>[];
  chatId: number;
}

export { CreateChatType, RemoveChatType, SearchUserByLoginType, AddUserToChat };
