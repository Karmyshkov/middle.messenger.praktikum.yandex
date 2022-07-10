import EventBus from './EventBus';

type UserStoreType = {
  avatar: string | null;
  display_name: string | null;
  email: string | null;
  first_name: string | null;
  id: string | null;
  login: string | null;
  phone: string | null;
  second_name: string | null;
  usersList: [];
};

enum STORE_EVENTS {
  UPDATE = 'update', // change
}

class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  get() {
    return this.state;
  }

  update(newData: any) {
    this.state = { ...this.state, ...newData };
    this.emit(STORE_EVENTS.UPDATE, newData); // newData -> newState
  }
}

export const userStore: Store<UserStoreType> = new Store();
