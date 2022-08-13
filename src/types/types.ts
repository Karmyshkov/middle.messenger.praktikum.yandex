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
  PathNotFound = 'path-not-found',
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

interface RemoveUserFromChat {
  users: number[];
  chatId: number;
}

interface GetChatTokenType {
  chatId: number;
}

interface GetUserForChatType {
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
  content: string;
  time: string;
  isRead?: boolean;
}

interface MessageDTO {
  chat_id: number;
  content: string;
  file: null | File;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
}

interface UserType {
  avatar: null | string;
  display_name: string;
  email: string;
  first_name: string;
  login: string;
  phone: string;
  second_name: string;
  id?: number;
  role?: 'regular' | 'admin';
}

interface LastMessage {
  content: string;
  id: number;
  time: string;
  user: UserType;
}

interface ChatsType {
  avatar: null | string;
  created_by: number;
  id: number;
  last_message?: LastMessage;
  title: string;
  unread_count: number;
}

interface InitialStateType {
  chats?: ChatsType[];
  userInfo?: UserType;
  usersFromChats?: string;
  users?: string;
  messages?: any;
}

type props = Record<string, any>;

enum STORE_EVENTS {
  UPDATE = 'update',
  ADD_USERS = 'add-users',
  DELETE_USERS = 'delete-users',
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
  GetUserForChatType,
  UserInfoDTO,
  UserInfoType,
  UserPasswordType,
  STORE_EVENTS,
  MessageDTO,
  RemoveUserFromChat,
  InitialStateType,
  UserType,
};
