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

interface UserPasswordDTO {
  oldPassword: string;
  newPassword: string;
}

interface UserPasswordType {
  oldPassword: string;
  newPassword: string;
}

export { UserInfoDTO, UserInfoType, UserPasswordDTO, UserPasswordType };
