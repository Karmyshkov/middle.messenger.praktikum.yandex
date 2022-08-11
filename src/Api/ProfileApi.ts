import { BaseAPI } from './BaseAPI';
import { UserInfo, UserPassword, SearchUserByLoginType } from 'types';

class ProfileApi extends BaseAPI {
  constructor() {
    super({ path: '/user' });
  }

  public changeAvatar(avatar: FormData) {
    return this.put('/profile/avatar', avatar, {});
  }

  public changeUserInfo(userInfo: UserInfo) {
    return this.put('/profile', userInfo);
  }

  public changeUserPassword(userPassword: UserPassword) {
    return this.put('/password', userPassword);
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return this.post('/search', login);
  }
}

export default new ProfileApi();
