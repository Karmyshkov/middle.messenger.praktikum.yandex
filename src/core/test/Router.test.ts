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

  it('should works add new routes', () => {
    expect(router.getHistory().length).toEqual(2);
  });
});
