import { expect } from 'chai';
import store from '../Store';

describe('core/Store', () => {
  it('Initial store not should be empty', () => {
    expect(store.getState()).to.be.not.null;
  });

  it('should set state', () => {
    store.setState({ users: 'test' });

    const state = store.getState();

    expect(state?.users).to.equal('test');
  });
});
