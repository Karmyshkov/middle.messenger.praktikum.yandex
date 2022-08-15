import { BaseAPI } from './BaseAPI';
import { UserInfoDTO, UserPasswordType, SearchUserByLoginType } from 'types';

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

  public changeUserPassword(userPassword: UserPasswordType) {
    return this.put('/password', userPassword);
  }

  public searchUserByLogin({ login }: SearchUserByLoginType) {
    return this.post('/search', login);
  }
}

export default new ProfileApi();
