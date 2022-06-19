enum InputTypeEnum {
  'text',
  'email',
  'password',
  'phone',
  'number',
}

type ChatType = {
  userName: string;
  lastMessage: string;
  time: string;
  countNotReadMessage: number;
  srcAvatar: string;
};

export { InputTypeEnum, ChatType };
