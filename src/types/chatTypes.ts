interface CreateChatType {
  title: string;
}

type ChatsType = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: null | string;
  title: string;
  unread_count: number;
};

type ChatsDTO = ChatsType[];

export { CreateChatType, ChatsType, ChatsDTO };
