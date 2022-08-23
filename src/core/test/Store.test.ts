import { expect } from 'chai';
import store from '../Store';

describe('core/Store', () => {
  it('should set state', () => {
    store.setState({ users: 'test' });

    const state = store.getState();

    expect(state?.users).to.equal('test');
  });
});
