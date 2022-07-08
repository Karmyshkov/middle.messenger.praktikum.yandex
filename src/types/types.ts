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
  Messenger = 'messenger',
  Profile = 'settings',
  EditProfle = 'edit-settings',
  EditPassword = 'edit-password',
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

interface SignupType {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export {
  BlockClass,
  InputType,
  ButtonType,
  Screens,
  ChatType,
  MessageProps,
  props,
  SignupType,
};
