enum InputType {
  'text',
  'email',
  'password',
  'phone',
  'number',
}

enum ButtonType {
  'button',
  'submit',
}

type ChatType = {
  userName: string;
  lastMessage: string;
  time: string;
  countNotReadMessage: number;
  srcAvatar: string;
};

export { InputType, ButtonType, ChatType };
