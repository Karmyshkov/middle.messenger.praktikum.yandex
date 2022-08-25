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

  it('must return error', () => {
    try {
      eventBus.emit('test-event1');
      eventBus.off('test-event1', mock);

      eventBus.on('test-event1', mock);
    } catch (err) {
      const objError = err as Error;
      expect(objError.message).toEqual('Нет события: test-event1');
    }
  });
});
