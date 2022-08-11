import EventBus from './EventBus';
import { STORE_EVENTS } from 'types';

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
    this.state = { ...this.state, ...newData };

    this.emit(STORE_EVENTS.UPDATE);
  }
}

export default new Store();
