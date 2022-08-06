import { BaseAPI } from './BaseAPI';

class ProfileApi extends BaseAPI {
  constructor() {
    super({ path: '/user/profile' });
  }

  public changeAvatar({ file }: any) {
    return this.put('avatar', { file });
  }
}

export default new ProfileApi();
