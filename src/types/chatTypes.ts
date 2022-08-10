interface CreateChatType {
  title: string;
}

interface RemoveChatType {
  chatId: string;
}

interface SearchUserByLoginType {
  login: string;
}

interface AddUserToChat {
  users: Record<number, number>[];
  chatId: number;
}

interface GetChatToken {
  chatId: number;
}

export {
  CreateChatType,
  RemoveChatType,
  SearchUserByLoginType,
  AddUserToChat,
  GetChatToken,
};
