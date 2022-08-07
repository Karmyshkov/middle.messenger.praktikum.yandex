interface CreateChatType {
  title: string;
}

interface RemoveChatType {
  chatId: string;
}

interface SearchUserByLoginType {
  login: string;
}

export { CreateChatType, RemoveChatType, SearchUserByLoginType };
