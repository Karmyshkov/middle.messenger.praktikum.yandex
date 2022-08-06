import { BaseAPI } from './BaseAPI';

class ProfileApi extends BaseAPI {
  constructor() {
    super({ path: '/user/profile' });
  }

  public changeAvatar(avatar: FormData) {
    return this.put('avatar', avatar, {});
  }
}

export default new ProfileApi();
