import EventBus from '../EventBus';

describe('core/EventBus', () => {
  const eventBus = new EventBus();

  const mock = jest.fn();

  it('must be defined', () => {
    expect(eventBus).toBeDefined();
  });

  it('on and emit event', () => {
    eventBus.on('test-event', mock);
    eventBus.emit('test-event');

    expect(mock).toHaveBeenCalled();
  });
});
