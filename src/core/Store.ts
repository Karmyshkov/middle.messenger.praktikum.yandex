import EventBus from './EventBus';
import { SignupType, SigninType } from 'types';

// type UserStoreType = {
//   avatar: string | null;
//   display_name: string | null;
//   email: string | null;
//   first_name: string | null;
//   id: string | null;
//   login: string | null;
//   phone: string | null;
//   second_name: string | null;
//   usersList: [];
// };

export enum STORE_EVENTS {
  UPDATE = 'update',
}

class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  getState() {
    return this.state;
  }

  setState(newData: any) {
    if (typeof newData.response === 'object') {
      this.state = { ...this.state, ...JSON.parse(newData.response) };
    }
    this.emit(STORE_EVENTS.UPDATE);
  }
}

// export const userStore: Store<UserStoreType> = new Store();
export const signupStore: Store<SignupType> = new Store();
export const signinStore: Store<SigninType> = new Store();
