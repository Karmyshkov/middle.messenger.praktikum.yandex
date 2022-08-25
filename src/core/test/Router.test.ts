import router from '../BrowseRouter';
import { Block } from 'core';

export class Test extends Block {
  protected render(): string {
    // language=hbs
    return `
      <p>Test</p>
    `;
  }
}

describe('core/Router', () => {
  router.use('/test-1', Test).use('/test-2', Test).start();

  it('must be defined', () => {
    expect(router).toBeDefined();
  });

  it('should works add new routes', () => {
    expect(router.getRouters().length).toEqual(2);
  });

  it('should return lenght of history equal 3', () => {
    router.go('/test-3');
    expect(window.history.length).toEqual(3);
  });
});
