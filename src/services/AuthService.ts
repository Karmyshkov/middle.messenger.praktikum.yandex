import authAPI from 'api/AuthAPI';
import { SignupType } from 'types';

class AuthService {
  public signup({ email, login, first_name, second_name, phone, password }: SignupType) {
    authAPI.signup({ email, login, first_name, second_name, phone, password });
  }
}

export default new AuthService();
