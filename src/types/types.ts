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

interface AddUserToChatType {
  users: number[];
  chatId: number;
}

interface GetChatTokenType {
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

interface UserPasswordType {
  oldPassword: string;
  newPassword: string;
  repeatPassword?: string;
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

enum STORE_EVENTS {
  UPDATE = 'update',
}

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
  AddUserToChatType,
  GetChatTokenType,
  UserInfoDTO,
  UserInfoType,
  UserPasswordType,
  STORE_EVENTS,
};
