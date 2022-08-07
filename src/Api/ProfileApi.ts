import { BaseAPI } from './BaseAPI';
import { UserInfoDTO } from 'types';

class ProfileApi extends BaseAPI {
  constructor() {
    super({ path: '/user/profile' });
  }

  public changeAvatar(avatar: FormData) {
    return this.put('avatar', avatar, {});
  }

  public changeUserInfo(userInfo: UserInfoDTO) {
    return this.put('', userInfo);
  }
}

export default new ProfileApi();
