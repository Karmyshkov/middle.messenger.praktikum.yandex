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

describe('Router test', () => {
  router.use('/test-1', Test).use('/test-2', Test).start();

  it('Should works add new routes', () => {
    expect(router.getHistory().length).toEqual(2);
  });
});
