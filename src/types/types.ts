enum InputType {
  'text',
  'email',
  'password',
  'tel',
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

interface MessageProps {
  owner: boolean;
  text?: string;
  time: string;
  srcImg?: string;
  isRead?: boolean;
}

export { InputType, ButtonType, ChatType, MessageProps };
