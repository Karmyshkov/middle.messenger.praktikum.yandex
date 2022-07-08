import { BaseAPI } from './BaseAPI';

export class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }
  public signup(data: any) {
    return this.post('/signup', data);
  }
}
