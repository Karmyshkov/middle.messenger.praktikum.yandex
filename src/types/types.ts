import { Block } from 'core';

interface BlockClass<P> extends Function {
  new (props: P): Block<P>;
  componentName?: string;
}

enum Screens {
  Signin = 'signin',
  Signup = 'signup',
  Messenger = 'messenger',
  Profile = 'settings',
  EditProfle = 'edit-settings',
  EditPassword = 'edit-password',
}

enum InputEnum {
  'text',
  'email',
  'password',
  'tel',
  'number',
}

enum ButtonEnum {
  'button',
  'submit',
}

interface SignupType {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

interface SigninType {
  login: string;
  password: string;
}

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

interface UserInfoDTO {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

interface UserInfoType {
  chatName: string;
  email: string;
  lastName: string;
  login: string;
  name: string;
  phone: string;
}

interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

//###

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

export {
  SignupType,
  SigninType,
  BlockClass,
  InputEnum,
  ButtonEnum,
  Screens,
  ChatType,
  MessageProps,
  props,
  CreateChatType,
  RemoveChatType,
  SearchUserByLoginType,
  AddUserToChat,
  GetChatToken,
  UserInfoDTO,
  UserInfoType,
  UserPassword,
};
