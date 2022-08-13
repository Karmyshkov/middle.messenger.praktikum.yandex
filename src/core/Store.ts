import EventBus from './EventBus';
import { STORE_EVENTS } from 'types';
import { initialState } from '../initialState';

class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  getState() {
    return this.state;
  }

  setState(newData: any, action?: string) {
    this.state = { ...this.state, ...newData };
    this.emit(action ? action : STORE_EVENTS.UPDATE);
  }
}

export default new Store(initialState);
