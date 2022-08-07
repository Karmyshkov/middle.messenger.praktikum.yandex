import { BaseAPI } from './BaseAPI';
import { UserInfoDTO, UserPasswordDTO } from 'types';

class ProfileApi extends BaseAPI {
  constructor() {
    super({ path: '/user' });
  }

  public changeAvatar(avatar: FormData) {
    return this.put('/profile/avatar', avatar, {});
  }

  public changeUserInfo(userInfo: UserInfoDTO) {
    return this.put('/profile', userInfo);
  }

  public changeUserPassword(userPassword: UserPasswordDTO) {
    return this.put('profile/password', userPassword);
  }
}

export default new ProfileApi();
