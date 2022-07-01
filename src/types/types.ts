import { Block } from 'core';

interface BlockClass<P> extends Function {
  new (props: P): Block<P>;
  componentName?: string;
}

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

enum Screens {
  Signin = 'signin',
  Signup = 'signup',
  Profile = 'profile',
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

type props = Record<string, any>;

export { BlockClass, InputType, ButtonType, Screens, ChatType, MessageProps, props };
