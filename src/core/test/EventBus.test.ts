import { expect } from 'chai';
import EventBus from '../EventBus';

describe('core/EventBus', () => {
  const eventBus = new EventBus();
  let text = '' as string | null;

  function mock() {
    text = 'mock';
  }

  beforeEach(() => {
    text = null;
  });

  it('on and emit event', () => {
    eventBus.on('test-event', mock);
    eventBus.emit('test-event');

    expect(text).to.be.a('string').and.to.equal('mock');
  });

  it('off event', () => {
    eventBus.off('test-event', mock);
    eventBus.emit('test-event');

    expect(text).to.be.a('null');
  });
});
