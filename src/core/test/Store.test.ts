import { StoreEvents } from 'types';
import store from '../Store';

describe('core/Store', () => {
  it('should set state', () => {
    store.setState({ users: 'test' });

    const state = store.getState();

    expect(state?.users).toEqual('test');
  });

  it('should emit event after store was update', () => {
    const mock = jest.fn();

    store.on(StoreEvents.UPDATE, mock);

    store.setState({ users: 'test' });

    expect(mock).toHaveBeenCalled();
  });
});
